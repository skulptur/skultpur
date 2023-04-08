import { RgbColor } from './types'
import { rgbToHsl } from './rgbToHsl'
import { hslToRgb } from './hslToRgb'

export function hueShift(color: RgbColor, angle: number): RgbColor {
  const hsl = rgbToHsl(color)!
  const newColor = hslToRgb({
    hue: (hsl.hue + angle) % 360,
    sat: hsl.sat,
    lum: hsl.lum,
    alpha: hsl.alpha,
  })!
  return newColor
}
