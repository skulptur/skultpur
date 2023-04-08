import { RgbColor } from './types'

export function luminance(color: RgbColor): number {
  const [r, g, b] = [color.red / 255, color.green / 255, color.blue / 255].map((channel) => {
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
