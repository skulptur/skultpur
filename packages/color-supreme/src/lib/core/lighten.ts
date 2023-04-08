import { RgbColor } from './types'

export function lighten(color: RgbColor, percentage: number): RgbColor {
  const factor = (100 + percentage) / 100
  const newColor: RgbColor = {
    red: Math.min(Math.round(color.red * factor), 255),
    green: Math.min(Math.round(color.green * factor), 255),
    blue: Math.min(Math.round(color.blue * factor), 255),
    alpha: color.alpha,
  }
  return newColor
}
