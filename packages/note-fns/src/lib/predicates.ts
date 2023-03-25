import {
  hasAccidental as internalHasAccidental,
  hasAccidentalLetter as internalHasAccidentalLetter,
  hasAccidentalSymbol as internalHasAccidentalSymbol,
  hasIntervalAmount as internalHasIntervalAmount,
  hasOctave as internalHasOctave,
  haveSameOctave as internalHaveSameOctave,
  isAnhemitonic as internalIsAnhemitonic,
  isAscending as internalIsAscending,
  isCohemitonic as internalIsCohemitonic,
  isDescending as internalIsDescending,
  isDiatonic as internalIsDiatonic,
  isFifth as internalIsFifth,
  isFlat as internalIsFlat,
  isHemitonic as internalIsHemitonic,
  isHeptatonic as internalIsHeptatonic,
  isHexatonic as internalIsHexatonic,
  isMode as internalIsMode,
  isNatural as internalIsNatural,
  isNote as internalIsNote,
  isOctatonic as internalIsOctatonic,
  isOctave as internalIsOctave,
  isPentatonic as internalIsPentatonic,
  isScale as internalIsScale,
  isSemitone as internalIsSemitone,
  isSharp as internalIsSharp,
  isTone as internalIsTone,
  isTriad as internalIsTriad,
  // @ts-ignore
} from 'music-fns'
import {
  Chord,
  Interval,
  OptionalDirection,
  Scale,
  ScientificNote,
  ScientificNotes,
} from './types/types'

/**
 * Returns true if the note has an accidental as a symbol (♭, ♯).
 * */
export const hasAccidental = (internalHasAccidental as (note: ScientificNote) => boolean) as (
  note: ScientificNote
) => boolean

/**
 * Returns true if the note has an accidental as a letter (b, #).
 * */
export const hasAccidentalLetter = internalHasAccidentalLetter as (note: ScientificNote) => boolean

/**
 * Returns true if the note has an accidental as a symbol (♭, ♯).
 * */
export const hasAccidentalSymbol = internalHasAccidentalSymbol as (note: ScientificNote) => boolean

/**
 * Returns true if a scale has the provided interval amount.
 * */
export const hasIntervalAmount = internalHasIntervalAmount as (
  scale: Scale,
  intervalAmount: number,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the note has octave information.
 * */
export const hasOctave = internalHasOctave as (note: ScientificNote) => boolean

/**
 * Returns true if all notes share the same octave information.
 * */
export const haveSameOctave = internalHaveSameOctave as (notes: ScientificNotes) => boolean

/**
 * Returns true if the scale is anhemitonic (does not contain semitones).
 * */
export const isAnhemitonic = internalIsAnhemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the scale is ascending.
 * */
export const isAscending = internalIsAscending as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the scale is cohemitonic (contains 2 or more semitones that appear consecutively in scale order).
 * */
export const isCohemitonic = internalIsCohemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the scale is descending.
 * */
export const isDescending = internalIsDescending as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the scale is diatonic (5 tones & 2 semitones, where the semitones are separated at least 2 steps from each other).
 * */
export const isDiatonic = internalIsDiatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the interval is a fifth (diminished, perfect or augmented) (6, 7, 8).
 * */
export const isFifth = internalIsFifth as (interval: Interval) => boolean

/**
 * Returns true if the note is flat (b, ♭).
 * */
export const isFlat = internalIsFlat as (note: ScientificNote) => boolean

/**
 * Returns true if the scale is hemitonic (contains 1 or more semitones).
 * */
export const isHemitonic = internalIsHemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the scale is heptatonic (7 notes per octave).
 * */
export const isHeptatonic = internalIsHeptatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the scale is hexatonic (6 notes per octave).
 * */
export const isHexatonic = internalIsHexatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true when the provided array of notes is a mode (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian or Locrian).
 * */
export const isMode = internalIsMode as (scale: Scale, options: OptionalDirection) => boolean

/**
 * Returns true if the note is natural (no accidental).
 * */
export const isNatural = internalIsNatural as (note: ScientificNote) => boolean

/**
 * Returns true if the provided value is a valid note in scientific pitch notation.
 * */
export const isNote = internalIsNote as (note: ScientificNote) => boolean

/**
 * Returns true if the scale is octatonic (8 notes per octave).
 * */
export const isOctatonic = internalIsOctatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true if the interval is an octave (12).
 * */
export const isOctave = internalIsOctave as (interval: Interval) => boolean

/**
 * Returns true if the scale is pentatonic (5 notes per octave).
 * */
export const isPentatonic = internalIsPentatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean

/**
 * Returns true when the array of notes is a scale.
 * */
export const isScale = internalIsScale as (scale: Scale, options: OptionalDirection) => boolean

/**
 * Returns true if the interval is a semitone (1).
 * */
export const isSemitone = internalIsSemitone as (interval: Interval) => boolean

/**
 * Returns true if the note is sharp (#, ♯).
 * */
export const isSharp = internalIsSharp as (note: ScientificNote) => boolean

/**
 * Returns true if the interval is a tone (2).
 * */
export const isTone = internalIsTone as (interval: Interval) => boolean

/**
 *Returns true if the chord is a triad (a set of three notes that can be stacked in thirds).
 * */
export const isTriad = internalIsTriad as (chord: Chord) => boolean
