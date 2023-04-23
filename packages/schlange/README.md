<!-- infuser start title -->

# schlange 🐍

<!-- infuser end title -->

<!-- infuser start description -->

A lightweight and flexible queue management library in written TypeScript. It provides a simple way to create and manage queues, with built-in error recovery and support for custom recovery strategies. Event-driven with event subscriptions.

<!-- infuser end description -->

<!-- infuser start installation -->

## Installation

Yarn

```bash
yarn add schlange
```

NPM

```bash
npm install schlange --save
```

<!-- infuser end installation -->

Example

```typescript
// Define a processing function for the queue
async function processData(item) {
  console.log(`Processing: ${item.data}`)
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

// Configure the queue
const queueProps: QueueProps<string> = {
  processFunction: processData,
  idGenerator: () =>
    Math.random()
      .toString(36)
      .substr(2, 9),
}

// Create the queue
const queue = createQueue(queueProps)

// Subscribe to events
queue.onItemAdded((item) => console.log(`Item added: ${item.data}`))
queue.onItemCompleted((id) => console.log(`Item completed: ${id}`))
queue.onQueueCompleted(() => console.log(`All done!`))

// Add items to the queue
queue.addToQueue('Item 1')
queue.addToQueue('Item 2')
```

<!-- infuser start usage -->
<!-- infuser end usage -->

### API

#### createQueue<T>(props: QueueProps<T>): Queue<T>

The `createQueue` function takes a `QueueProps` object and returns a new `Queue` instance.

`QueueProps` properties:

- `processFunction`: A function that will process the queue items. It should return a Promise.
- `idGenerator`: A function that generates unique IDs for queue items.
- `recoveryStrategy` (optional): A custom recovery strategy. By default, the library uses the `defaultRecoveryStrategy`.

#### Queue

The `Queue` instance provides the following methods and properties:

- `queue`: An array of `QueueItem<T>` objects.
- `isProcessing`: A boolean that indicates if the queue is currently being processed.

Event subscription methods:

- `onItemAdded(callback: (item: QueueItem<T>) => void)`: Subscribe to the `itemAdded` event.
- `onItemRemoved(callback: (id: string) => void)`: Subscribe to the `itemRemoved` event.
- `onQueueCleared(callback: () => void)`: Subscribe to the `queueCleared` event.
- `onItemUpdated(callback: (args: { id: string; updatedItem: Partial<QueueItem<T>> }) => void)`: Subscribe to the `itemUpdated` event.
- `onProcessingStarted(callback: () => void)`: Subscribe to the `processingStarted` event.
- `onProcessingStopped(callback: () => void)`: Subscribe to the `processingStopped` event.
- `onItemCompleted(callback: (id: string) => void)`: Subscribe to the `itemCompleted` event.
- `onItemError(callback: (args: { id: string; error: Error }) => void)`: Subscribe to the `itemError` event.
- `onQueueCompleted(callback: () => void)`: Subscribe to the `queueCompleted` event.

Queue manipulation methods:

- `addToQueue(data: T)`: Add an item to the queue.
- `removeFromQueue(id: string)`: Remove an item from the queue by its ID.
- `updateQueueItem(id: string, updatedItem: Partial<QueueItem<T>>)`: Update an item in the queue.
- `startProcessing()`: Start processing the queue.
- `stopProcessing()`: Stop processing the queue.
- `clearQueue()`: Clear the entire queue.
- `dispose()`: Dispose the queue instance and clean up resources.

---

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start footer -->

## Notice

This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.

<!-- infuser end footer -->
