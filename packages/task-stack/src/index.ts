import { createPubSub, groupByAction, CallbacksFromEvents } from "lightcast";

export type QueueInput<T> = {
  id: string;
  status: QueueItemStatus;
  data: T;
};

type QueueItemStatus = "completed" | "in progress" | "pending" | "error";

// For error recovery properties
type QueueItemErrorRecovery = {
  retryCount: number;
};

export type QueueItem<T> = QueueInput<T> & {
  progress?: number;
  src?: string;
  errorRecovery?: QueueItemErrorRecovery;
};

export type Queue<T> = ReturnType<typeof createQueue>;

type RecoveryStrategyProps<T> = {
  item: QueueItem<any>;
  error: Error;
  retry: () => void;
  skip: () => void;
};

export type RecoveryStrategy<T> = (
  recoveryStrategyProps: RecoveryStrategyProps<T>
) => void;

// Extract the default recovery strategy into a separate function
export const createDefaultRecoveryStrategy = <T>(config: {
  maxRetries: number;
}): RecoveryStrategy<T> => {
  return ({ item, retry, skip }) => {
    if (!item.errorRecovery) {
      item.errorRecovery = { retryCount: 0 };
    }

    if (item.errorRecovery.retryCount < config.maxRetries) {
      item.errorRecovery.retryCount++;
      retry();
    } else {
      skip();
    }
  };
};

const defaultRecoveryStrategy = createDefaultRecoveryStrategy({
  maxRetries: 3,
});

const createCallbacks = () => {
  const callbackEvents = {
    onItemAdded: createPubSub<QueueItem<any>>(),
    onItemRemoved: createPubSub<string>(),
    onQueueCleared: createPubSub<void>(),
    onItemUpdated: createPubSub<{
      id: string;
      updatedItem: Partial<QueueItem<any>>;
    }>(),
    onProcessingStarted: createPubSub<void>(),
    onProcessingStopped: createPubSub<void>(),
    onItemCompleted: createPubSub<string>(),
    onItemError: createPubSub<{ id: string; error: Error }>(),
  };

  return callbackEvents;
};

type QueueCallbacks = CallbacksFromEvents<ReturnType<typeof createCallbacks>>;

export type QueueProps<T> = {
  processFunction: (values: QueueItem<T>) => Promise<any>;
  idGenerator: () => string;
  recoveryStrategy?: RecoveryStrategy<T>;
} & Partial<QueueCallbacks>;

const getDefaultState = <T>() => ({
  queue: [] as QueueItem<T>[],
  isProcessing: false,
});

export function createQueue<T>(props: QueueProps<T>) {
  // state
  const state = getDefaultState<T>();

  // events
  const queueEvents = groupByAction(createCallbacks());

  // subscribe to the events passed in the props object
  for (const eventKey in queueEvents.subscribe) {
    const eventName = eventKey as keyof QueueCallbacks;
    const callback = props[eventName];
    if (callback) {
      queueEvents.subscribe[eventName](callback as any);
    }
  }

  // cleanup
  const dispose = () => {
    // clean up resources
    Object.assign(state, getDefaultState());

    // dispose events
    for (const eventKey in queueEvents.dispose) {
      const eventName = eventKey as keyof QueueCallbacks;
      queueEvents.dispose[eventName]();
    }
  };

  const addToQueue = (data: T): QueueItem<T> => {
    const newItem: QueueItem<T> = {
      id: props.idGenerator(),
      status: "pending",
      data,
    };
    state.queue.push(newItem);
    queueEvents.dispatch.onItemAdded(newItem);

    // Start processing the queue if not already processing
    if (!state.isProcessing) {
      startProcessing();
      asyncQueue(newItem);
    }

    return newItem;
  };
  const removeFromQueue = (id: string) => {
    state.queue = state.queue.filter((item) => item.id !== id);
    queueEvents.dispatch.onItemRemoved(id);
  };

  const clearQueue = () => {
    state.queue = [];
    queueEvents.dispatch.onQueueCleared();
  };

  const updateQueueItem = (id: string, updatedItem: Partial<QueueItem<T>>) => {
    state.queue = state.queue.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    queueEvents.dispatch.onItemUpdated({ id, updatedItem });
  };

  const startProcessing = () => {
    if (state.isProcessing) return;
    state.isProcessing = true;
    queueEvents.dispatch.onProcessingStarted();
  };

  const stopProcessing = () => {
    state.isProcessing = false;
    queueEvents.dispatch.onProcessingStopped();
  };

  const asyncQueue = async (item: QueueItem<T>) => {
    if (!state.isProcessing) return;

    updateQueueItem(item.id, { status: "in progress" });

    try {
      await props.processFunction(item);
      updateQueueItem(item.id, { status: "completed" });
      queueEvents.dispatch.onItemCompleted(item.id);
    } catch (error) {
      updateQueueItem(item.id, { status: "error" });

      const retry = () => asyncQueue(item);
      const skip = () => {
        queueEvents.dispatch.onItemError({ id: item.id, error: error as any });
        removeFromQueue(item.id);
        const pendingItem = findItemByStatus("pending");
        if (pendingItem) {
          asyncQueue(pendingItem);
        } else {
          stopProcessing();
        }
      };

      const recoveryStrategy =
        props.recoveryStrategy || defaultRecoveryStrategy;

      recoveryStrategy({
        item,
        error: error as any,
        retry,
        skip,
      });
    }
  };

  const findItemByStatus = (status: QueueItemStatus) => {
    return state.queue.find((item) => item.status === status);
  };

  return {
    get queue() {
      return state.queue;
    },
    get isProcessing() {
      return state.isProcessing;
    },
    ...queueEvents.subscribe,
    addToQueue,
    removeFromQueue,
    updateQueueItem,
    startProcessing,
    stopProcessing,
    clearQueue,
    dispose,
  };
}
