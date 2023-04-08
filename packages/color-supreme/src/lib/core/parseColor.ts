import { HexColor, HslColor, RgbColor } from './types'
import { hslToRgb } from './hslToRgb'
import { hexToRgb } from './hexToRgb'
import { isValidRgb } from './isValidRgb'
import { parseRgb } from './parseRgb'
import { isValidHex } from './isValidHex'
import { parseHex } from './parseHex'
import { isValidHsl } from './isValidHsl'
import { parseHsl } from './parseHsl'

export function parseColor(color: string | RgbColor | HslColor | HexColor): RgbColor {
  if (typeof color === 'string') {
    if (isValidRgb(color)) {
      return parseRgb(color)!
    } else if (isValidHex(color)) {
      return hexToRgb(parseHex(color))!
    } else if (isValidHsl(color)) {
      return hslToRgb(parseHsl(color))!
    }
    throw new Error('Invalid color string')
  } else {
    const isColorObjRgb = isValidRgb(color as any)
    const isColorObjHex = isValidHex(color as any)
    const isColorObjHsl = isValidHsl(color as any)

    if (isColorObjRgb) {
      return color as RgbColor
    } else if (isColorObjHex) {
      return hexToRgb(color as HexColor)!
    } else if (isColorObjHsl) {
      return hslToRgb(color as HslColor)!
    }
  }
  throw new Error('Invalid color object')
}
