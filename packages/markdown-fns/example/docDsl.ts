type TextStyle = 'bold' | 'italic' | 'strike' | 'boldItalic' | 'inlineCode'
type PlainText = { kind: 'PlainText'; text: string }
type StyledText = { kind: 'StyledText'; text: string; style: TextStyle }
type Link = { kind: 'Link'; text: string; url: string }
type Break = { kind: 'Break' }
type CodeBlock = { kind: 'CodeBlock'; text: string; language: string }

export type DocElement = Break | PlainText | StyledText | Link | CodeBlock

export const text = (text: string): DocElement => ({
  kind: 'PlainText',
  text,
})

export const styledText = (style: TextStyle, text: string): DocElement => ({
  kind: 'StyledText',
  text,
  style,
})

export const link = (url: string, text: string): DocElement => ({
  kind: 'Link',
  text,
  url,
})

export const codeBlock = (language: string, text: string): DocElement => ({
  kind: 'CodeBlock',
  language,
  text,
})

// markdown interpreter
const styleDelimitter: Record<TextStyle, string> = {
  bold: '**',
  italic: '*',
  boldItalic: '***',
  strike: '~~',
  inlineCode: '`',
}
const codeBlockDelimitter = '```'

export const markdownInterpreter = (element: DocElement): string => {
  switch (element.kind) {
    case 'PlainText':
      return `${element.text}`
    case 'StyledText':
      const delimitter = styleDelimitter[element.style]
      return `${delimitter}${element.text}${delimitter}`
    case 'Link':
      return `[${element.text}](${element.url})`
    case 'CodeBlock':
      return `${codeBlockDelimitter}${element.language}${element.text}${codeBlockDelimitter}`
    default: {
      throw new Error(`unsupported node type ${element.kind}`)
    }
  }
}
