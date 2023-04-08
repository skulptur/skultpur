import { RgbColor } from './types'
import { complement } from './complement'
import { splitComplementary } from './splitComplementary'

export function tetradic(color: RgbColor, angle: number = 90): [RgbColor, RgbColor, RgbColor] {
  const [color1, color2] = splitComplementary(color, angle)
  const color3 = complement(color)
  return [color1, color2, color3]
}
