## `loop-fns`

A lightweight solution for looping with great performance and control.

## Get started

Install

```bash
yarn add loop-fns
# or
npm install --save loop-fns
```

Use

```typescript
import { loopFrames } from 'loop-fns'

const props = loopFrames((props) => {
  // your graphics update logic...

  // you can also control the loop within the callback
  if (props.currentFrame === 10) {
    props.stop()
  }
}, 30) // limit to 30fps

props.start()
```

<!-- [Examples](https://github.com/skulptur/loop-fns/tree/master/example) -->
