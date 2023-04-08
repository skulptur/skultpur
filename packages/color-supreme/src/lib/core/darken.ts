import { tint } from './tint'
import { RgbColor } from './types'

const black: RgbColor = { red: 0, green: 0, blue: 0, alpha: 1 }
export function darken(color: RgbColor, factor: number): RgbColor {
  return tint(color, black, factor)
}
