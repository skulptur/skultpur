import { RgbColor } from './types'
import { complement } from './complement'
import { splitComplementary } from './splitComplementary'
import { triadic } from './triadic'
import { tetradic } from './tetradic'
import { analogous } from './analogous'
import { monochromatic } from './monochromatic'

export function colorHarmony(color: RgbColor, scheme: string): RgbColor[] {
  switch (scheme) {
    case 'complementary':
      return [complement(color)]
    case 'splitComplementary':
      return splitComplementary(color)
    case 'triadic':
      return triadic(color)
    case 'tetradic':
      return tetradic(color)
    case 'analogous':
      return analogous(color)
    case 'monochromatic':
      return monochromatic(color)
    default:
      throw new Error('Invalid color harmony scheme')
  }
}
