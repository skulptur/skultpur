<!-- infuser start title -->
# lightcast
<!-- infuser end title -->

<!-- infuser start description -->
The Pub/Sub pattern is needed every now and then and this library is a no dependency, tiny and typesafe solution.
<!-- infuser end description -->

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add lightcast  
```  
NPM  
```bash  
npm install lightcast --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import { createPubSub } from 'lightcast'

// create
const pubSub = createPubSub<string>()

// subscribe anywhere in your app
pubSub.subscribe(console.log)
pubSub.subscribe(console.log)

// dispatch
pubSub.dispatch('hello world')
```

Working with groups

```typescript
// say you have a piece of code that accepts callbacks for events
const loader = createLoader({
  onProgress: (progress) => console.log(progress),
  onComplete: () => console.log('done'),
})
```

```typescript
import { createPubSub } from 'lightcast'

const pubSub = {
  onProgress: createPubSub<number>(),
  onComplete: createPubSub<void>(),
}

// you could make it work like this...
const loader = createLoader({
  onProgress: pubSub.onProgress.dispatch,
  onComplete: pubSub.onComplete.dispatch,
  // ...
})
```

```typescript
import { createPubSub, groupByAction } from 'lightcast'

// but it is easier to group by dispatch/subscribe/dispose
const pubSub = groupByAction({
  onProgress: createPubSub<number>(),
  onComplete: createPubSub<void>(),
})

const loader = createLoader({
  ...pubSub.dispatch,
  // ...
})
```

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start notes -->  
## Notice  
This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding.  
<!-- infuser end notes -->

<!-- infuser start license -->  
## License  

This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
  
<!-- infuser end license -->
