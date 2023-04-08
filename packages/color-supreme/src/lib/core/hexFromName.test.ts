import { formatHex } from './formatHex'
import { hexFromName } from './hexFromName'

test('Gets color value from color names', () => {
  expect(formatHex(hexFromName('red'))).toBe('#ff0000')
  expect(formatHex(hexFromName('blue'))).toBe('#0000ff')
  expect(formatHex(hexFromName('green'))).toBe('#008000')
  expect(formatHex(hexFromName('pink'))).toBe('#ffc0cb')
  expect(formatHex(hexFromName('hotpink'))).toBe('#ff69b4')
})

test('List of colors can be extended', () => {
  expect(formatHex(hexFromName('PANTONE 2350 C', { 'PANTONE 2350 C': '#af231c' }))).toBe('#af231c')
})
