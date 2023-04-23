export type SubscribeFn<Payload> = (callback: (payload: Payload) => void) => () => void
export type DispatchFn<Payload> = (payload: Payload) => void
export type DisposeFn = () => void

// When you have an object where the values are PubSub types and you want to extract the callbacks from all of them
export type SubscribeFns<T extends Record<any, PubSub<any>>> = {
  [K in keyof T]: T[K] extends PubSub<infer U> ? (payload: U) => void : never
}

export type PubSub<Payload> = {
  subscribe: SubscribeFn<Payload>
  dispatch: DispatchFn<Payload>
  dispose: DisposeFn
}

export const createPubSub = <Payload>(): PubSub<Payload> => {
  let subscriptions: Array<(payload: Payload) => void> = []

  const subscribe = (callback: (payload: Payload) => void) => {
    subscriptions.push(callback)

    const unsubscribe = () => {
      const index = subscriptions.indexOf(callback)
      index !== -1 && subscriptions.splice(index, 1)
    }

    return unsubscribe
  }

  const dispatch = (payload: Payload) => {
    const length = subscriptions.length
    for (let id = 0; id < length; id++) {
      subscriptions[id](payload)
    }
  }

  const dispose = () => {
    subscriptions = []
  }

  return {
    subscribe,
    dispatch,
    dispose,
  }
}
type AllEventPayload<T extends Record<any, PubSub<any>>> = {
  [K in keyof T]: [K, T[K] extends PubSub<infer U> ? U : never]
}[keyof T]

type Subscriptions<T extends Record<any, PubSub<any>>> = {
  [K in keyof T]: T[K] extends PubSub<infer U> ? (payload: U) => void : never
} & {
  all?: (payload: AllEventPayload<T>) => void
}

export type GroupByAction<T extends Record<any, PubSub<any>>> = {
  subscribe: {
    [P in keyof T]: T[P]['subscribe']
  } & {
    onAnyEvent: SubscribeFn<AllEventPayload<T>>
  }
  subscribeWith: (subscriptions: Subscriptions<T>) => () => void
  dispatch: {
    [P in keyof T]: T[P]['dispatch']
  }
  dispose: {
    [P in keyof T]: T[P]['dispose']
  } & {
    all: DisposeFn
  }
}

export const groupByAction = <T extends Record<any, PubSub<any>>>(obj: T): GroupByAction<T> => {
  const entries = Object.entries(obj)
  const anyEvents = createPubSub<AllEventPayload<T>>()

  const subscribeObj = Object.fromEntries(entries.map(([key, val]) => [key, val.subscribe])) as any
  const dispatchObj = Object.fromEntries(
    entries.map(([key, val]) => [
      key,
      (payload: any) => {
        val.dispatch(payload)
        anyEvents.dispatch([key as keyof T, payload])
      },
    ])
  ) as any
  const disposeObj = Object.fromEntries(entries.map(([key, val]) => [key, val.dispose])) as any

  const subscribeWith = (subscriptions: Subscriptions<T>): (() => void) => {
    const unsubscribeFns: Array<() => void> = []

    for (const key in subscriptions) {
      if (key === 'all') {
        unsubscribeFns.push(anyEvents.subscribe(subscriptions[key]!))
      } else if (key in obj) {
        unsubscribeFns.push(obj[key].subscribe(subscriptions[key]))
      }
    }

    return () => {
      unsubscribeFns.forEach((unsubscribe) => unsubscribe())
    }
  }

  return {
    subscribe: {
      ...subscribeObj,
      onAnyEvent: anyEvents.subscribe,
    },
    subscribeWith,
    dispatch: dispatchObj,
    dispose: {
      ...disposeObj,
      all: () => {
        entries.forEach(([, val]) => val.dispose())
        anyEvents.dispose()
      },
    },
  }
}
