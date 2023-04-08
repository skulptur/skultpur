import { RgbColor } from './types'
import { rgbToHsl } from './rgbToHsl'
import { hslToRgb } from './hslToRgb'

export function complement(color: RgbColor): RgbColor {
  const hsl = rgbToHsl(color)!
  const newColor = hslToRgb({
    hue: (hsl.hue + 180) % 360,
    sat: hsl.sat,
    lum: hsl.lum,
    alpha: hsl.alpha,
  })!
  return newColor
}
