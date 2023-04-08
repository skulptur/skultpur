import { RgbColor } from './types'
import { luminance } from './luminance'

export function contrastRatio(color1: RgbColor, color2: RgbColor): number {
  const lum1 = luminance(color1) + 0.05
  const lum2 = luminance(color2) + 0.05
  return lum1 > lum2 ? lum1 / lum2 : lum2 / lum1
}
