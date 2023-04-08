import { RgbColor } from './types'

export function grayscale(color: RgbColor): RgbColor {
  const average = Math.round((color.red + color.green + color.blue) / 3)
  const newColor: RgbColor = {
    red: average,
    green: average,
    blue: average,
    alpha: color.alpha,
  }
  return newColor
}
