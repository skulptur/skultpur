import {
  basicManipulator,
  fromKeyCodeEvent,
  to,
  rule,
  toggleMode,
  modifiers, replaceClipboardAndPaste,
  KeyCode
} from '../src'

const emojiMode = toggleMode('textInsert', 'e', modifiers(['control', 'shift']))

const emojiMap = {
  'p': "✌️",
  'f': "🔥️",
  'e': "👀",
  'l': "⚡"
}

const emojiMapping = Object.entries(emojiMap).map(([key, val]) => {
  return basicManipulator(fromKeyCodeEvent(key as KeyCode), to(replaceClipboardAndPaste(val)), emojiMode.isOn)
})

const textInsert = rule('Text insert mode', [
  ...emojiMode.manipulators,
    ...emojiMapping
])

document.getElementById('json')!.textContent = JSON.stringify(textInsert, null, 2)


