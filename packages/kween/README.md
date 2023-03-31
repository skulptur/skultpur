<p align="center">
  <img alt="kween-logo" src="https://github.com/skulptur/kween/blob/master/kween-logo.png?raw=true" width="350">
</p>

<!-- infuser start description -->
Simple tween library written in Typescript
<!-- infuser end description -->

<!-- infuser start installation -->  
  
## Installation  
Yarn  
```bash  
yarn add kween  
```  
NPM  
```bash  
npm install kween --save  
```  
  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import { tween, bounceInOut } from 'kween'

tween({
  duration: 1000, // in milliseconds
  ease: bounceInOut,
  onUpdate: (value, progress) => {
    // value is eased, progress is linear
    console.log(value, progress)
  },
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
