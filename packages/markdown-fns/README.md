Warning: This is a work in progress and the API isn't currently stable yet!

<!-- infuser start title -->
# markdown-fns
<!-- infuser end title -->

<!-- infuser start description -->
Markdown is meant for humans to type, but isn't any good when you want to abstract patterns that often appear in documentation. With the functions provided by markdown-fns it is not only possible but also very easy to do so.
<!-- infuser end description -->

<!-- infuser start installation -->  
  
## Installation  
Yarn  
```bash  
yarn add markdown-fns  
```  
NPM  
```bash  
npm install markdown-fns --save  
```  
  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import {
  bold,
  heading,
  inlineCode,
  italic,
  lines,
  link,
  ordered,
  spaces,
  strike,
  times,
  unordered,
} from 'markdown-fns'

const exampleUrl =
  'https://github.com/skulptur/markdown-fns/tree/master/example'
const fruits = ['Apples', 'Oranges', 'Bananas']

const markdown = lines([
  lines(times(index => heading(index + 1, 'This is a heading.'), 6)),
  'This is regular text.',
  italic('Italic text.'),
  bold('Bold text.'),
  strike('Strike through text.'),
  lines([
    'More regular text.',
    spaces(['Text and', inlineCode('inline code'), '.']),
    'and then some more text.',
  ]),
  ordered(fruits),
  unordered(fruits),
  link('example', exampleUrl),
]) // output below!
```

# This is a heading.

## This is a heading.

### This is a heading.

#### This is a heading.

##### This is a heading.

###### This is a heading.

This is regular text.

**_Italic text._**

**Bold text.**

~~Strike through text.~~

This is regular text.

Text and `inline code`.

and then some more text.

1. Apples
2. Oranges
3. Bananas

- Apples
- Oranges
- Bananas

[example](https://github.com/skulptur/markdown-fns/tree/master/example)

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
