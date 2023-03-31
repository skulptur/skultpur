<!-- infuser start title -->
# loop-fns
<!-- infuser end title -->

<!-- infuser start description -->
A lightweight solution for looping with great performance and control.
<!-- infuser end description -->

<!-- infuser start installation -->  
  
## Installation  
Yarn  
```bash  
yarn add loop-fns  
```  
NPM  
```bash  
npm install loop-fns --save  
```  
  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

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

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start notes -->
<!-- infuser end notes -->

<!-- infuser start license -->  
  
## License  

This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
  
  
<!-- infuser end license -->
