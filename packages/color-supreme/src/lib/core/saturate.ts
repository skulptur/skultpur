import { RgbColor } from './types'
import { rgbToHsl } from './rgbToHsl'
import { hslToRgb } from './hslToRgb'

export function saturate(color: RgbColor, percentage: number): RgbColor {
  const hsl = rgbToHsl(color)!
  const newColor = hslToRgb({
    hue: hsl.hue,
    sat: hsl.sat * (1 + percentage / 100),
    lum: hsl.lum,
    alpha: hsl.alpha,
  })!
  return newColor
}
