import { CmykColor, HexColor, HslColor, RgbColor } from './types'
import { formatRgb } from './formatRgb'
import { formatHex } from './formatHex'
import { formatCmyk } from './formatCmyk'
import { formatHsl } from './formatHsl'

export function formatColor(
  color: RgbColor | HslColor | HexColor | CmykColor,
  format: 'rgb' | 'hex' | 'hsl' | 'cmyk'
): string {
  if (format === 'rgb') {
    return formatRgb(color as RgbColor)
  } else if (format === 'hex') {
    return formatHex(color as HexColor)
  } else if (format === 'hsl') {
    return formatHsl(color as HslColor)
  } else if (format === 'cmyk') {
    return formatCmyk(color as CmykColor)
  }
  throw new Error('Invalid color format')
}
