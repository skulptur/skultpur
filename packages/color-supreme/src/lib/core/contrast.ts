import { RgbColor } from './types'

export function contrast(color: RgbColor, contrast: number): RgbColor {
  const factor = (259 * (contrast + 255)) / (255 * (259 - contrast))

  const red = Math.min(Math.max(Math.round(factor * (color.red - 128) + 128), 0), 255)
  const green = Math.min(Math.max(Math.round(factor * (color.green - 128) + 128), 0), 255)
  const blue = Math.min(Math.max(Math.round(factor * (color.blue - 128) + 128), 0), 255)

  return {
    red,
    green,
    blue,
  }
}
