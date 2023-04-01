<!-- infuser start header -->  
# unit-fns  
Unit-fns provides composable primitives that make it easy to generate complex numerical patterns with little code.  
<!-- infuser end header -->

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add unit-fns  
```  
NPM  
```bash  
npm install unit-fns --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import { toUnit } from 'unit-fns'

console.log(toUnit(10)) // 1
```

[Examples](https://github.com/skulptur/unit-fns/tree/master/example)

## API

- Most functions receive and return numbers in the 0-1 range. Let's call a number that is in that range a Unit.
- Functions that can be pure, are pure.
- The argument order is optimized for partial application.

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start footer -->  
## Notice  
This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  
<!-- infuser end footer -->
