export const lineBreak = () => '  \n'

export const bold = (str: string) => wrap('**', str)

export const code = (language: string, str: string) =>
  wrap('```', prefix(language, wrap(lineBreak(), str)))

// TODO: clamp 1 - 6
export const heading = (level: number, str: string) =>
  spaces([join(times(always('#'), level)), str])

export const image = (alt: string) => (url: string) => `![${alt}](${url})`

export const inlineCode = (str: string) => wrap('`', str)

export const italic = (str: string) => wrap('***', str)

export const link = (label: string, url: string) => `[${label}](${url})`

export const quote = (str: string) => prefix('> ', str)

export const strike = (str: string) => wrap('~~', str)

export const ordered = (stringArray: Array<string>) =>
  lineBreak().concat(
    lines(stringArray.map((str, index) => prefix(`${index + 1}. `, str)))
  )

const columnSeparator = '|'

const headerSeparator = '-'

export const table = (rows: Array<Array<string>>) => {
  //   TODO: format output
  //   const columnLengths = rows.reduce((lengths, column) => {
  //     return lengths.map(co)
  //   }, )

  const [header, ...content] = rows
  const rowsWithHeader: Array<Array<string>> = [
    header,
    header.map(heading =>
      heading
        .split('')
        .map(() => headerSeparator)
        .join('')
    ),
    ...content,
  ]

  return lineBreak().concat(
    rowsWithHeader
      .map(columns => {
        return ['', ...columns, ''].join(columnSeparator)
      })
      .join('\n')
  )
}

export const unordered = (stringArray: Array<string>) =>
  prefix(lineBreak(), lines(stringArray.map(str => prefix('* ', str))))

export const always = <T>(value: T) => () => value

export const join = (stringArray: Array<string>) => stringArray.join('')

export const joinWith = (separator: string, stringArray: Array<string>) =>
  stringArray.join(separator)

export const prefix = (str1: string, str2: string) => `${str1}${str2}`

export const postfix = (str1: string, str2: string) => `${str2}${str1}`

export const spaces = (stringArray: Array<string>) => stringArray.join(' ')

export const lines = (stringArray: Array<string>) => stringArray.join('  \n')

export const times = <T>(callback: (index: number) => T, length: number) =>
  [...new Array(length)].map((_, index) => callback(index))

export const wrap = (wrapper: string, str: string) =>
  `${wrapper}${str}${wrapper}`
