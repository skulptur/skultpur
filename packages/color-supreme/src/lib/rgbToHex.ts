import type { RGBColor } from 'pixel-paradise'

export function rgbToHex([r, g, b]: RGBColor): string {
  const hexR = r.toString(16).padStart(2, '0')
  const hexG = g.toString(16).padStart(2, '0')
  const hexB = b.toString(16).padStart(2, '0')

  return `#${hexR}${hexG}${hexB}`
}
