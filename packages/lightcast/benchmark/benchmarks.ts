import Benchmark from 'benchmark'
import { createPubSub } from '../dist'

// Utility function to create a simple callback
const createCallback = (id: number) => (payload: any) => {
  console.log(`Callback ${id}: ${payload}`)
}

// Create a suite of benchmark tests
const suite = new Benchmark.Suite('PubSub')

// Adding test for subscribing
suite
  .add('Subscribe', () => {
    const pubSub = createPubSub<number>()
    const callbacks = Array.from({ length: 100 }, (_, i) => createCallback(i))
    const unsubscribes = callbacks.map((callback) => pubSub.subscribe(callback))

    // Unsubscribe all callbacks
    unsubscribes.forEach((unsubscribe) => unsubscribe())
  })
  .add('Dispatch', () => {
    const pubSub = createPubSub<number>()
    const callbacks = Array.from({ length: 100 }, (_, i) => createCallback(i))
    callbacks.forEach((callback) => pubSub.subscribe(callback))

    // Dispatch payload
    pubSub.dispatch(42)
  })
  .add('Dispose', () => {
    const pubSub = createPubSub<number>()
    const callbacks = Array.from({ length: 100 }, (_, i) => createCallback(i))
    callbacks.forEach((callback) => pubSub.subscribe(callback))

    // Dispose
    pubSub.dispose()
  })
  .on('cycle', (event: Benchmark.Event) => {
    console.log(String(event.target))
  })
  .on('complete', function(this: Benchmark.Suite) {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: false })
