import { tint } from './tint'
import { RgbColor } from './types'

const white: RgbColor = { red: 255, green: 255, blue: 255, alpha: 1 }
export function lighten(color: RgbColor, factor: number): RgbColor {
  return tint(color, white, factor)
}
