import { RgbColor } from './types'
import { mix } from './mix'

export function tint(color1: RgbColor, color2: RgbColor, ratio: number): RgbColor {
  return mix(color1, color2, ratio)
}
