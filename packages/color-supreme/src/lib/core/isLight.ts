import { RgbColor } from './types'
import { isDark } from './isDark'

export function isLight(color: RgbColor): boolean {
  return !isDark(color)
}
