import {
  NOTES as internalNOTES,
  accidentalToLetter as internalAccidentalToLetter,
  accidentalToSymbol as internalAccidentalToSymbol,
  areEqual as internalAreEqual,
  areIntervals as internalAreIntervals,
  areNotes as internalAreNotes,
  createChord as internalCreateChord,
  createMelody as internalCreateMelody,
  createScale as internalCreateScale,
  flatToSharp as internalFlatToSharp,
  getAccidental as internalGetAccidental,
  getChromaticCPosition as internalGetChromaticCPosition,
  getDominant as internalGetDominant,
  getIntervals as internalGetIntervals,
  getLeadingTone as internalGetLeadingTone,
  getMediant as internalGetMediant,
  getNote as internalGetNote,
  getNoteOnDegree as internalGetNoteOnDegree,
  getOctave as internalGetOctave,
  getRoot as internalGetRoot,
  getSubdominant as internalGetSubdominant,
  getSubmediant as internalGetSubmediant,
  getSupertonic as internalGetSupertonic,
  getTonic as internalGetTonic,
  normalize as internalNormalize,
  noteToFrequency as internalNoteToFrequency,
  noteToMidi as internalNoteToMidi,
  noteToObject as internalNoteToObject,
  objectToNote as internalObjectToNote,
  sharpToFlat as internalSharpToFlat,
  transferAccidental as internalTransferAccidental,
  transferStyle as internalTransferStyle,
  transpose as internalTranspose,
  // @ts-ignore
} from 'music-fns'
import {
  Accidental,
  AccidentalType,
  Direction,
  Interval,
  Intervals,
  NoteIndex,
  NoteDescription,
  Octave,
  OptionalDirection,
  Root,
  Scale,
  ScientificNote,
  ScientificNotes,
  Hertz,
  Midi,
} from './types/types'

export const noteVariations = internalNOTES

/**
 * Converts a note which has an accidental as a symbol (♭, ♯) to a note with the accidental as a letter (b, #).
 * */
export const accidentalToLetter = internalAccidentalToLetter as (
  note: ScientificNote
) => ScientificNote

/**
 * Converts a note which has an accidental as a letter (b, #) to a note with the accidental as a symbol (♭, ♯).
 * */
export const accidentalToSymbol = internalAccidentalToSymbol as (
  note: ScientificNote
) => ScientificNote

/**
 * Returns true if the provided notes are the same notes.
 * */
export const areEqual = internalAreEqual as (note: ScientificNotes) => boolean

export const areIntervals = internalAreIntervals as (intervals: Intervals) => boolean

export const areNotes = internalAreNotes as (notes: ScientificNotes) => boolean

/**
 * Creates a chord by providing a root note and intervals (use Chords).
 * */
export const createChord = internalCreateChord as (
  root: ScientificNote,
  chord: Intervals
) => ScientificNotes

/**
 * Creates a melody using a provided array of notes and a pattern.
 * */
export const createMelody = internalCreateMelody as (
  notes: ScientificNotes,
  pattern: number[]
) => ScientificNotes

export type CreateScaleOptions = {
  includeRootEnd: boolean
}

/**
 * Creates a scale (or mode) by providing a root note and an intervals (use the Scale or Mode constant).
 * You can provide includeRootEnd to also include the root note transposed an octave up.
 * */
export const createScale = internalCreateScale as (
  root: ScientificNote,
  scale: Intervals,
  options?: CreateScaleOptions
) => ScientificNotes

/**
 * Converts a flat to its sharp equivalent, this function preserves the accidental style (letter or symbol).
 * If no flat is found the function returns the unmodified input.
 * */
export const flatToSharp = internalFlatToSharp as (note: ScientificNote) => ScientificNote

/**
 * Returns the accidental (or undefined) from a note.
 * */
export const getAccidental = internalGetAccidental as (
  note: ScientificNote
) => Accidental | AccidentalType

/**
 * Returns the (0-indexed) position of the specific root within a chromatic C scale (equals the NOTES constant).
 * */
export const getChromaticCPosition = internalGetChromaticCPosition as (
  note: ScientificNote
) => NoteIndex

/**
 * Returns the note on scale degree 5 in a diatonic scale.
 * */
export const getDominant = internalGetDominant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

export type GetIntervalsOptioms = {
  fromRoot?: boolean
  direction?: Direction
}

/**
 * Returns one or more intervals between the provided notes. You can pass fromRoot to calculate the interval from the first note (= root).
 * */
export const getIntervals = internalGetIntervals as (
  note: ScientificNote,
  note2: ScientificNote,
  options: GetIntervalsOptioms
) => Array<number>

/**
 * Returns the note on scale degree 7 in a diatonic scale.
 * */
export const getLeadingTone = internalGetLeadingTone as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

/**
 * Returns the note on scale degree 3 in a diatonic scale.
 * */
export const getMediant = internalGetMediant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

/**
 * Returns the full note (note + accidental) from a note.
 */
export const getNote = internalGetNote as (note: ScientificNote) => string // also note but not sure the type;

/**
 * Returns the note on the provided scale degree.
 * */
export const getNoteOnDegree = internalGetNoteOnDegree as (
  scale: Scale,
  degree: number,
  options: OptionalDirection
) => ScientificNote

/**
 * Returns the octave information (or undefined) from a note.
 * */
export const getOctave = internalGetOctave as (note: ScientificNote) => Octave

/**
 * Returns the root (only note, no accidental) from a note.
 * */
export const getRoot = internalGetRoot as (note: ScientificNote) => Root

/**
 * Returns the note on scale degree 4 in a diatonic scale.
 * */
export const getSubdominant = internalGetSubdominant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

/**
 * Returns the note on scale degree 6 in a diatonic scale.
 * */
export const getSubmediant = internalGetSubmediant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

/**
 * Returns the note on scale degree 2 in a diatonic scale.
 * */
export const getSupertonic = internalGetSupertonic as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

/**
 * Returns the note on scale degree 1 in a diatonic scale.
 * */
export const getTonic = internalGetTonic as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote

/**
 * Normalize a scale by making sure it's ascending & has a root end.
 * */
export const normalize = internalNormalize as (scale: Scale, options: OptionalDirection) => Scale

export type NoteToFrequencyProps = { standard: Hertz }
/**
 * Converts a note to a frequency (in Hz). You can use a different base frequency for A4 via standard.
 * */
export const noteToFrequency = internalNoteToFrequency as (
  note: ScientificNote,
  options: NoteToFrequencyProps
) => Hertz

export type NoteToMidiProps = { standard: Hertz }
/**
 * Converts a note to its MIDI number. C4 = 60 in our implementation. You can provide a different middle C via standard.
 * */
export const noteToMidi = internalNoteToMidi as (
  note: ScientificNote,
  options: NoteToMidiProps
) => Midi

/**
 * The object can contain the following keys:
 * root: a root note (C, D, E, F, G, A, B)
 * [accidental]: SHARP, FLAT
 * [accidentalType]: SYMBOL, LETTER
 * [octave]: number
 * */
export const noteToNoteDescription = internalNoteToObject as (
  scientificNote: ScientificNote
) => NoteDescription

/**
 * Converts an object describing the note to a note.

 * The object can contain following keys:

 * root: a root note (C, D, E, F, G, A, B)
 * [accidental]: SHARP / FLAT
 * [accidentalType]: SYMBOL / LETTER
 * [octave]: number
 * */
export const noteDescriptionToNote = internalObjectToNote as (
  noteObject: NoteDescription
) => ScientificNote

/**
 * Converts a sharp to its flat equivalent, this function preserves the accidental style (letter or symbol).
 * If no sharp is found the function returns the unmodified input.
 * */
export const sharpToFlat = internalSharpToFlat as (note: ScientificNote) => ScientificNote

/**
 * Transfer the accidental type (flat or sharp) from a provided reference note
 * In this example, we've converted F♯3 to Gb3 because the reference note is Bb4 (a flat instead of sharp).
 * */
export const transferAccidental = internalTransferAccidental as (
  note: ScientificNote,
  referenceNote: ScientificNote
) => ScientificNote

/**
 * Combination of transferAccidental and transferAccidentalStyle.
 * In this example, we've converted F#3 to G♭3 because the reference note is B♭4 (a flat symbol instead of a sharp letter).
 * */
export const transferStyle = internalTransferStyle as (
  note: ScientificNote,
  referenceNote: ScientificNote
) => ScientificNote

/**
 * Transpose a note by a specific interval (use the Interval constant). An interval can also be negative.
 * */
export const transpose = internalTranspose as (
  note: ScientificNote,
  interval: Interval,
  reference?: ScientificNote
) => ScientificNote
