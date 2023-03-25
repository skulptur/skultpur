import { noteInterval } from './noteInterval'
import { defaultMiddleAFrequency, getMiddleCFrequency, middleOctave } from './getMiddleCFrequency'
import { Hertz, NoteName } from './types/types'

// TODO: is it duplicate of music-fns noteToFrequency? if not then must export this
export const noteNameToFrequency = (
  name: NoteName,
  middleAFrequency: Hertz = defaultMiddleAFrequency as Hertz
): Hertz => {
  const couple = name.split(/(\d+)/)
  const distance = noteInterval[couple[0] as NoteName]
  const octaveDiff = (parseInt(couple[1], 10) || middleOctave) - middleOctave
  const freq = getMiddleCFrequency(middleAFrequency) * Math.pow(Math.pow(2, 1 / 12), distance)
  return (freq * Math.pow(2, octaveDiff)) as Hertz
}
