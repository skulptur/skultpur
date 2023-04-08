import { ColorNameLookup, RgbColor } from './types'
import { hexToRgb } from './hexToRgb'
import { colorDifference } from './colorDifference'

export function closestNamedColor(color: RgbColor, colorNameLookup: ColorNameLookup): string {
  let minDistance = Infinity
  let closestName = ''
  const colorKeys = Object.keys(colorNameLookup)

  for (const name of colorKeys) {
    const hexColor = colorNameLookup[name]
    const namedColor = hexToRgb(hexColor)!
    const distance = colorDifference(color, namedColor)
    if (distance < minDistance) {
      minDistance = distance
      closestName = name
    }
  }
  return closestName
}
