## Motivation

The Pub/Sub pattern is needed every now and then and this library is a no dependency, tiny and typesafe solution.

## Get started

Install

```bash
npm install --save lightcast
# or
yarn add lightcast
```

Use

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
