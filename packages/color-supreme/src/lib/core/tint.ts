import { RgbColor } from './types'
import { mix } from './mix'

export function tint(color: RgbColor, percentage: number): RgbColor {
  return mix(color, { red: 255, green: 255, blue: 255 }, percentage)
}
