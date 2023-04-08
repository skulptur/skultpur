import { parseHex } from './parseHex'

test('parses HEX strings', () => {
  const parsed = parseHex('#c97f6a')

  expect(parsed).toMatchObject({
    red: 'c9',
    green: '7f',
    blue: '6a',
  })
})

test('parses shorthand HEX strings', () => {
  const parsed = parseHex('#0f0')

  expect(parsed).toMatchObject({
    red: '00',
    green: 'ff',
    blue: '00',
  })

  expect(parseHex('invalid-string')).toBeNull()
  expect(parseHex(null)).toBe(null)
})
