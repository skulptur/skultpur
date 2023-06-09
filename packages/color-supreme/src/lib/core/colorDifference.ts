import { RgbColor } from './types'

export function colorDifference(color1: RgbColor, color2: RgbColor): number {
  return (
    Math.abs(color1.red - color2.red) +
    Math.abs(color1.green - color2.green) +
    Math.abs(color1.blue - color2.blue)
  )
}
