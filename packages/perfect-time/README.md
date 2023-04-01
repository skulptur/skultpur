<!-- infuser start title -->
# perfect-time
<!-- infuser end title -->

<!-- infuser start description -->
A generic clock that makes it easy to schedule repeating time based events with precision in Typescript. It works by calling scheduled events slightly before their side effects should take place, which is great in combination with Web Audio for example.
<!-- infuser end description -->

This essentially allows you to circumvent [issues with javascript timers](https://www.html5rocks.com/en/tutorials/audio/scheduling/).

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add perfect-time  
```  
NPM  
```bash  
npm install perfect-time --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import { createClock, createSetIntervalTicker } from 'perfect-time'

// Any object with updating currentTime will do (make sure it is resumed)
const context = new AudioContext()

const clock = createClock({
  context,
  // The ticker is what periodically runs the check for events.
  // Ideally you would use a ticker in another thread but here
  // we tick on the same thread every 100ms using setInterval.
  ticker: createSetIntervalTicker(100),
})

player.start()

clock
  .every(1, (event) => {
    // AudioContext.currentTime is in seconds
    console.log('every second:', event.count)
  })
  .limit(10) // clear event after 10 times!
```

## API

The clock works with user or library provided "tickers" that can run on a separate thread. The events have a time tolerance in which they must get executed or else they get dropped. You can tweak the early and late tolerance to suit your application.

- Early: too high and there might be a noticeable lag between state is reflected in the side effects (say a knob move to cause a change in sound).
- Late: too high and events might actually start getting executed past their time.

Note that AudioContext is used just for the sake of the examples as the clock is generic and can work with any `{ currentTime: number }`.

**Create a clock**

```typescript
import { createClock, createScriptProcessorTicker } from 'perfect-time'

const clock = createClock({
  // For audio you'll want to pass AudioContext.
  context: audioContext,
  // This one actually needs to receive an AudioContext as it uses ScriptProcessorNode internally
  ticker: createScriptProcessorTicker(audioContext),
})
```

**Schedule Events**

```typescript
const callback = (event) => {
  // use event.time to schedule precisely (for example using AudioContext)
  oscNode.start(event.time)
}

// callback gets called right before context.currentTime reaches 10 seconds
player.atTime(10, callback)

// callback gets called immediately and and repeats every 10 seconds
player.every(10, callback)

// callback gets called right before 10 seconds elapsed
player.setTimeout(10, callback)

// callback gets called right before 10 seconds elapsed and repeats
player.setInterval(10, callback)
```

**Control Events**

You can also control the event directly, for example to schedule repetition in the future or limiting repeats.

```typescript
// callback called right before context.currentTime reaches 10, and then every second 3 times
// player.atTime returns an event, which we call .repeat on
player.atTime(10, callback).repeat(1, 3)

// equivalent to the above
clock
  .atTime(10, callback)
  .repeat(1)
  .limit(3)
```

**Cancel Events**

```typescript
// start an oscillator node at context.currentTime = 1
const event = player.every(1, (event) => {
  oscNode.start(event.time)
})

// nevermind
event.clear()
```

**Change speed of a group of events**

```typescript
const eventA = player.atTime(1, () => console.log('event A')).repeat(3)
const eventB = player.atTime(2, () => console.log('event B')).repeat(3)
const eventC = player.atTime(3, () => console.log('event C')).repeat(3)

// the speed will be halved immediately for all events
player.timeStretch(0.5)

// the speed will be doubled in 9 seconds only for eventA and eventB
player.setTimeout(9, (event) => {
  player.timeStretch(2, event.time, [eventA, eventB])
})
```

[Examples](https://github.com/skulptur/perfect-time/tree/master/example/src)

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
