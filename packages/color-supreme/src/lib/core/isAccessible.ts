import { RgbColor } from './types'
import { contrastRatio } from './contrastRatio'

export function isAccessible(
  color1: RgbColor,
  color2: RgbColor,
  wcagLevel: 'AA' | 'AAA' = 'AA'
): boolean {
  const ratio = contrastRatio(color1, color2)
  const minRatio = wcagLevel === 'AA' ? 4.5 : 7
  return ratio >= minRatio
}
