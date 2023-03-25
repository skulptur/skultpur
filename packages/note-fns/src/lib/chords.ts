import { Intervals } from './types/types'

export const augmentedChord: Intervals = [0, 4, 8] as const
export const diminishedChord: Intervals = [0, 3, 6] as const
export const majorSeventhChord: Intervals = [0, 4, 7, 11] as const
export const majorChord: Intervals = [0, 4, 7] as const
export const minorMajorSeventhChord: Intervals = [0, 3, 7, 11] as const
export const minorSeventhChord: Intervals = [0, 3, 7, 10] as const
export const minorChord: Intervals = [0, 3, 7] as const
export const seventhChord: Intervals = [0, 4, 7, 10] as const

export const Chords = {
  augmented: augmentedChord,
  diminished: diminishedChord,
  majorSeventh: majorSeventhChord,
  major: majorChord,
  minorMajorSeventh: minorMajorSeventhChord,
  minorSeventh: minorSeventhChord,
  minor: minorChord,
  seventh: seventhChord,
}
