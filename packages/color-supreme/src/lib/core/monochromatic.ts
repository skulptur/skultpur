import { RgbColor } from './types'
import { rgbToHsl } from './rgbToHsl'
import { hslToRgb } from './hslToRgb'

export function monochromatic(color: RgbColor, count: number = 5): RgbColor[] {
  const hsl = rgbToHsl(color)!
  const step = 1 / (count + 1)
  const colors: RgbColor[] = []
  for (let i = 1; i <= count; i++) {
    colors.push(
      hslToRgb({
        hue: hsl.hue,
        sat: hsl.sat,
        lum: hsl.lum * i * step,
        alpha: hsl.alpha,
      })!
    )
  }
  return colors
}
