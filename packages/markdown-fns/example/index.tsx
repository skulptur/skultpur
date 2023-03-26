import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styledText, markdownInterpreter } from './docDsl'

const ReactMarkdown = require('react-markdown')
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
  table,
  lineBreak,
} from '../src'

const doc = styledText('bold', 'hello world')
console.log(markdownInterpreter(doc))

const exampleUrl =
  'https://github.com/skulptur/markdown-fns/tree/master/example'
const fruits = ['Apples', 'Oranges', 'Bananas']

const markdown = lines([
  lines(times(index => heading(index + 1, 'This is a heading.'), 6)),
  'This is regular text.',
  italic('Italic text.'),
  bold('Bold text.'),
  strike('Strike through text.'),
  spaces(['Text and', inlineCode('inline code'), '.']),
  ordered(fruits),
  unordered(fruits),
  lineBreak(),
  link('example', exampleUrl),
  table([
    ['Fruit', 'price'],
    ['Apple', '10'],
    ['Orange', '10'],
    ['Banana', '10'],
  ]),
  table([
    ['Fruit', 'price', 'Fruit', 'price'],
    ['Apple', '10', 'Apple', '10'],
    ['Orange', '10', 'Orange', '10'],
    ['Banana', '10', 'Banana', '10'],
  ]),
])

const App = () => {
  const preRef = React.useRef<HTMLPreElement | null>(null)

  return (
    <div>
      <pre ref={preRef}>{markdown}</pre>
      <ReactMarkdown source={markdown} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
