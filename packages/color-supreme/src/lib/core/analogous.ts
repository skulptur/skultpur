import { RgbColor } from './types'
import { rgbToHsl } from './rgbToHsl'
import { hslToRgb } from './hslToRgb'

export function analogous(color: RgbColor, angle: number = 30): [RgbColor, RgbColor] {
  const hsl = rgbToHsl(color)!
  const color1 = hslToRgb({
    hue: (hsl.hue + angle) % 360,
    sat: hsl.sat,
    lum: hsl.lum,
    alpha: hsl.alpha,
  })!
  const color2 = hslToRgb({
    hue: (hsl.hue - angle + 360) % 360,
    sat: hsl.sat,
    lum: hsl.lum,
    alpha: hsl.alpha,
  })!
  return [color1, color2]
}
