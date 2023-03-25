import { Intervals } from './types/types'

export const ionianMode: Intervals = [2, 2, 1, 2, 2, 2, 1] as const
export const dorianMode: Intervals = [2, 1, 2, 2, 2, 1, 2] as const
export const phrygianMode: Intervals = [1, 2, 2, 2, 1, 2, 2] as const
export const lydianMode: Intervals = [2, 2, 2, 1, 2, 2, 1] as const
export const mixolydianMode: Intervals = [2, 2, 1, 2, 2, 1, 2] as const
export const aeolianMode: Intervals = [2, 1, 2, 2, 1, 2, 2] as const
export const locrianMode: Intervals = [1, 2, 2, 1, 2, 2, 2] as const

export const Modes = {
  ionian: ionianMode,
  dorian: dorianMode,
  phrygian: phrygianMode,
  lydian: lydianMode,
  mixolydian: mixolydianMode,
  aeolian: aeolianMode,
  locrian: locrianMode,
}
