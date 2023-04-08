import { RgbColor } from './types'
import { splitComplementary } from './splitComplementary'

export function triadic(color: RgbColor): [RgbColor, RgbColor] {
  return splitComplementary(color, 120)
}
