import { RgbColor } from './types'
import { monochromatic } from './monochromatic'
import { colorHarmony } from './colorHarmony'

export function paletteGenerator(color: RgbColor, scheme: string, count?: number): RgbColor[] {
  const baseColors = colorHarmony(color, scheme)
  if (scheme === 'monochromatic' && count) {
    return monochromatic(color, count)
  }
  return baseColors
}
