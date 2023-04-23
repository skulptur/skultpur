import { createPubSub, groupByAction, CallbacksFromEvents } from 'lightcast'

export type QueueInput<T> = {
  id: string
  status: QueueItemStatus
  data: T
}

export type QueueItemStatus = 'completed' | 'processing' | 'pending' | 'error'

// For error recovery properties
export type QueueItemErrorRecovery = {
  retryCount: number
}

export type QueueItem<T> = QueueInput<T> & {
  progress?: number
  src?: string
  errorRecovery?: QueueItemErrorRecovery
}

export type Queue<T> = {
  items: QueueItem<T>[]
  isProcessing: boolean
  onItemAdded: (callback: (item: QueueItem<T>) => void) => void
  onItemsChange: (callback: (items: QueueItem<T>[]) => void) => void
  onItemRemoved: (callback: (id: string) => void) => void
  onItemsCleared: (callback: () => void) => void
  onItemUpdated: (
    callback: (args: { id: string; updatedItem: Partial<QueueItem<T>> }) => void
  ) => void
  onProcessingStarted: (callback: () => void) => void
  onProcessingStopped: (callback: () => void) => void
  onItemCompleted: (callback: (id: string) => void) => void
  onItemError: (callback: (args: { id: string; error: Error }) => void) => void
  onProcessingCompleted: (callback: () => void) => void
  addItem: (data: T) => QueueItem<T>
  removeItem: (id: string) => void
  updateItem: (id: string, updatedItem: Partial<QueueItem<T>>) => void
  startProcessing: () => void
  stopProcessing: () => void
  clearItems: () => void
  dispose: () => void
}

export type RecoveryStrategyProps<T> = {
  item: QueueItem<T>
  error: Error
  retry: () => void
  skip: () => void
}

export type RecoveryStrategy<T> = (recoveryStrategyProps: RecoveryStrategyProps<T>) => void

// Extract the default recovery strategy into a separate function
export const createDefaultRecoveryStrategy = <T>(config: {
  maxRetries: number
}): RecoveryStrategy<T> => {
  return ({ item, retry, skip }) => {
    if (!item.errorRecovery) {
      item.errorRecovery = { retryCount: 0 }
    }

    if (item.errorRecovery.retryCount < config.maxRetries) {
      item.errorRecovery.retryCount++
      retry()
    } else {
      skip()
    }
  }
}

export const defaultRecoveryStrategy = createDefaultRecoveryStrategy({
  maxRetries: 3,
})

export const createCallbacks = <T>() => {
  const callbackEvents = {
    onItemAdded: createPubSub<QueueItem<T>>(),
    onItemRemoved: createPubSub<string>(),
    onItemsCleared: createPubSub<void>(),
    onItemsChange: createPubSub<QueueItem<T>[]>(),
    onItemUpdated: createPubSub<{
      id: string
      updatedItem: Partial<QueueItem<T>>
    }>(),
    onProcessingStarted: createPubSub<void>(),
    onProcessingStopped: createPubSub<void>(),
    onItemCompleted: createPubSub<string>(),
    onItemError: createPubSub<{ id: string; error: Error }>(),
    onProcessingCompleted: createPubSub<void>(),
  }

  return callbackEvents
}

export type QueueCallbacks = CallbacksFromEvents<ReturnType<typeof createCallbacks>>

export type QueueProps<T> = {
  processFunction: (item: QueueItem<T>, queue: Queue<T>) => Promise<any>
  idGenerator: () => string
  recoveryStrategy?: RecoveryStrategy<T>
  items?: QueueItem<T>[]
} & Partial<QueueCallbacks>

export const getDefaultState = <T>(items: QueueItem<T>[] = []) => ({
  items,
  isProcessing: false,
})

export function createQueue<T>(props: QueueProps<T>): Queue<T> {
  // state
  const state = getDefaultState<T>(props.items)

  // events
  const queueEvents = groupByAction(createCallbacks())

  queueEvents.subscribe.onItemCompleted(() => {
    if (!!findItemByStatus('pending')) {
      queueEvents.dispatch.onProcessingCompleted()
    }
  })

  const dispatchQueueChange = () => {
    queueEvents.dispatch.onItemsChange(state.items)
  }

  // subscribe to the events passed in the props object
  for (const eventKey in queueEvents.subscribe) {
    const eventName = eventKey as keyof QueueCallbacks
    const callback = props[eventName]
    if (callback) {
      queueEvents.subscribe[eventName](callback as any)
    }
  }

  // cleanup
  const dispose = () => {
    // clean up resources
    Object.assign(state, getDefaultState())

    // dispose events
    for (const eventKey in queueEvents.dispose) {
      const eventName = eventKey as keyof QueueCallbacks
      queueEvents.dispose[eventName]()
    }
  }

  const addItem = (data: T): QueueItem<T> => {
    const newItem: QueueItem<T> = {
      id: props.idGenerator(),
      status: 'pending',
      data,
    }
    state.items.push(newItem)
    queueEvents.dispatch.onItemAdded(newItem)
    dispatchQueueChange()

    // Start processing the queue if not already processing
    if (!state.isProcessing) {
      startProcessing()
      asyncQueue(newItem)
    }

    return newItem
  }

  const removeItem = (id: string) => {
    state.items = state.items.filter((item) => item.id !== id)
    queueEvents.dispatch.onItemRemoved(id)
    dispatchQueueChange()
  }

  const clearItems = () => {
    state.items = []
    queueEvents.dispatch.onItemsCleared()
    dispatchQueueChange()
  }

  const updateItem = (id: string, updatedItem: Partial<QueueItem<T>>) => {
    state.items = state.items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    queueEvents.dispatch.onItemUpdated({ id, updatedItem })
    dispatchQueueChange()
  }

  const startProcessing = () => {
    if (state.isProcessing) return
    state.isProcessing = true
    queueEvents.dispatch.onProcessingStarted()
  }

  const stopProcessing = () => {
    state.isProcessing = false
    queueEvents.dispatch.onProcessingStopped()
  }

  const findItemByStatus = (status: QueueItemStatus) => {
    return state.items.find((item) => item.status === status)
  }

  const queue = {
    get items() {
      return state.items
    },
    get isProcessing() {
      return state.isProcessing
    },
    ...queueEvents.subscribe,
    addItem,
    removeItem,
    updateItem,
    startProcessing,
    stopProcessing,
    clearItems,
    dispose,
  } as Queue<T>

  const asyncQueue = async (item: QueueItem<T>) => {
    if (!state.isProcessing) return

    updateItem(item.id, { status: 'processing' })

    try {
      await props.processFunction(item, queue)

      updateItem(item.id, { status: 'completed' })

      queueEvents.dispatch.onItemCompleted(item.id)

      const nextPendingItem = findItemByStatus('pending')

      if (nextPendingItem) {
        asyncQueue(nextPendingItem)
      } else {
        stopProcessing()
      }
    } catch (error) {
      updateItem(item.id, { status: 'error' })

      const retry = () => asyncQueue(item)

      const skip = () => {
        queueEvents.dispatch.onItemError({ id: item.id, error: error as any })
        removeItem(item.id)
        const pendingItem = findItemByStatus('pending')
        if (pendingItem) {
          asyncQueue(pendingItem)
        } else {
          stopProcessing()
        }
      }

      const recoveryStrategy = props.recoveryStrategy || defaultRecoveryStrategy

      recoveryStrategy({
        item,
        error: error as any,
        retry,
        skip,
      })
    }
  }

  return queue
}
