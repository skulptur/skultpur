import { toShellCommandEvent } from '../helpers/toEvents'

// TODO: for some reason insert only works the first time. After that it just pastes from the clipboard. Could it be because of the variable name??
// pastes argument string using applescript and clipboard
export const insert = (text: string) => {
  return toShellCommandEvent(
    `osascript -e 'set temp to the clipboard' -e 'delay 0.05' -e 'set the clipboard to "${text}"' -e 'delay 0.05' -e 'tell application "System Events" to keystroke "v" using command down' -e 'set the clipboard to temp' -e 'end'`
  )
}

export const replaceClipboardAndPaste = (text: string) => {
  return toShellCommandEvent(
      `osascript -e 'set the clipboard to "${text}"' -e 'tell application "System Events" to keystroke "v" using command down' -e 'end'`
  )
}

// // pastes argument string using applescript and clipboard
// export const insert = (text: string) => {
//   return toShellCommandEvent(
//       `osascript -e 'set temp to the clipboard' -e 'set the clipboard to \"${text}\"' -e 'tell application \"System Events\" to keystroke \"v\" using command down' -e 'set the clipboard to temp' -e 'end'`
//   )
// }

// pastes argument string using applescript
export const keystrokes = (text: string) => {
  return toShellCommandEvent(
      `osascript -e 'tell application "System Events" to keystroke "${text}"'`
  )
}
