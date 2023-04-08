import { parseColor } from './parseColor'
import { RgbColor, HslColor, HexColor } from './types'

describe('parseColor', () => {
  const rgb: RgbColor = { red: 255, green: 0, blue: 0, alpha: 1 }
  const hsl: HslColor = { hue: 0, sat: 1, lum: 0.5 }
  const hex: HexColor = { red: 'FF', green: '00', blue: '00' }

  it('should parse an RGB color string', () => {
    expect(parseColor('rgb(255, 0, 0)')).toEqual(rgb)
  })

  it('should parse a HEX color string', () => {
    expect(parseColor(hex)).toEqual(rgb)
  })

  it('should parse an HSL color string', () => {
    expect(parseColor('hsl(0, 100%, 50%)')).toEqual(rgb)
  })

  it('should return an RGB color object', () => {
    expect(parseColor(rgb)).toEqual(rgb)
  })

  it('should convert a HEX color object to RGB', () => {
    expect(parseColor(hex)).toEqual(rgb)
  })

  it('should convert an HSL color object to RGB', () => {
    expect(parseColor(hsl)).toEqual(rgb)
  })

  it('should throw an error for invalid color string', () => {
    expect(() => parseColor('invalid')).toThrow('Invalid color string')
  })

  it('should throw an error for invalid color object', () => {
    expect(() => parseColor({ red: 1000, green: 0, blue: 0 })).toThrow('Invalid color object')
  })
})
