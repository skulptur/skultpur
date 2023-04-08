import { RgbColor } from './types'
import { mix } from './mix'

export function shade(color: RgbColor, percentage: number): RgbColor {
  return mix(color, { red: 0, green: 0, blue: 0 }, percentage)
}
