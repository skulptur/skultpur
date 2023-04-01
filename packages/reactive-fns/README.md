<!-- infuser start title -->
# reactive-fns
<!-- infuser end title -->

<!-- infuser start description -->
This library is based on the brilliant Callbag spec by André Staltz, which allows creating both pullable and listenable streams from simple functions. That makes it lightweight and flexible and that's why it shines when used as a primitive for libraries or apps!
<!-- infuser end description -->

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add reactive-fns  
```  
NPM  
```bash  
npm install reactive-fns --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import { pipe, interval, tap, map, filter, forEach } from 'reactive-fns'

pipe(
  interval(1000),
  tap((v) => console.log('Before: ' + v)),
  map((x) => x * 3),
  filter((x) => x % 2 === 0),
  forEach((v) => console.log('After: ' + v))
)
```

### Source Creators

- fromEvent: Listen to DOM event.
- fromIter: Convert an Iterable or Iterator to a pullable stream (only send data when requested).
- fromPromise: Converts a promise to a stream.
- interval: Emits an increasing number at given intervals.
- of: Convert static value(s) to a stream.

### Operators

- debounce: Debounces incoming values.
- filter: Filters incoming values.
- flatten: Flattens higher-order streams.
- map: Transforms incoming values.
- mapTo: Transforms the contents of the stream to the provided value.
- sample: Operator that samples a pullable stream when a listenable stream emits.
- scan: Combine consecutive values from stream.
- share: Multicast stream.
- skip: Ignores the first n of the stream.
- skipRepeats: Skips consecutive values that pass the given predicate (defaults to a === b).
- startWith: Start with given values.
- take: Take a maximum number of values from stream.
- withPrevious: Puts the previous value with current in an array.

### Combinators

- concat: Combine streams by putting one stream after the previous stream ends.
- merge: Merges given streams, emitting when each one emits.
- combine: Combines given streams, emits arrays of latest values of each.

### Utilities

- extract: Get the last emitted value if it exists.
- forEach: Subscribes to given stream.
- pipe: Pipes streams to operators to sinks.
- tap: Taps into given stream.

## Learn more

- [Callbag basics](https://github.com/staltz/callbag-basics)
- [Why we need callbags](https://staltz.com/why-we-need-callbags.html)

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
