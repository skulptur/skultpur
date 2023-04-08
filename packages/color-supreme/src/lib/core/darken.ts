import { RgbColor } from './types'

export function darken(color: RgbColor, percentage: number): RgbColor {
  const factor = (100 - percentage) / 100
  const newColor: RgbColor = {
    red: Math.round(color.red * factor),
    green: Math.round(color.green * factor),
    blue: Math.round(color.blue * factor),
    alpha: color.alpha,
  }
  return newColor
}
