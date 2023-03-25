import { Hertz } from './types/types'

// the octave number of our known frequency, for example middle C is C4
export const middleOctave = 4
export const defaultMiddleAFrequency: Hertz = 440 as Hertz

// the frequency of the middle C (C4)
export const getMiddleCFrequency = (middleAFrequency: Hertz = defaultMiddleAFrequency as Hertz) => {
  return (middleAFrequency * Math.pow(Math.pow(2, 1 / 12), -9)) as Hertz
}
