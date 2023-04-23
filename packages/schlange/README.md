<!-- infuser start title -->

# schlange

<!-- infuser end title -->

<!-- infuser start description -->

Async queue library 🐍

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

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start footer -->

## Notice

This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.

<!-- infuser end footer -->
