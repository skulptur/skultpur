import { RgbColor } from './types'

export function invert(color: RgbColor): RgbColor {
  const newColor: RgbColor = {
    red: 255 - color.red,
    green: 255 - color.green,
    blue: 255 - color.blue,
    alpha: color.alpha,
  }
  return newColor
}
