const emptyArray: Array<any> = []

export type SubscribeFn<Payload> = (callback: (payload: Payload) => void) => () => void
export type DispatchFn<Payload> = (payload: Payload) => void
export type DisposeFn = () => void

export type PubSub<Payload> = {
  subscribe: SubscribeFn<Payload>
  dispatch: DispatchFn<Payload>
  dispose: DisposeFn
}

export const createPubSub = <Payload>(): PubSub<Payload> => {
  let subscriptions: Array<(payload: Payload) => void> = emptyArray

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
    subscriptions = emptyArray
  }

  return {
    subscribe,
    dispatch,
    dispose,
  }
}

type GroupByAction<T extends Record<any, PubSub<any>>> = {
  subscribe: {
    [P in keyof T]: T[P]['subscribe']
  }
  dispatch: {
    [P in keyof T]: T[P]['dispatch']
  }
  dispose: {
    [P in keyof T]: T[P]['dispose']
  }
}

export const groupByAction = <T extends Record<any, PubSub<any>>>(obj: T): GroupByAction<T> => {
  const entries = Object.entries(obj)
  return {
    subscribe: Object.fromEntries(entries.map(([key, val]) => [key, val.subscribe])) as any,
    dispatch: Object.fromEntries(entries.map(([key, val]) => [key, val.dispatch])) as any,
    dispose: Object.fromEntries(entries.map(([key, val]) => [key, val.dispose])) as any,
  }
}
