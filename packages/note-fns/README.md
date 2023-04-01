<!-- infuser start title -->
# note-fns
<!-- infuser end title -->

<!-- infuser start description -->
Use this library when you need a comprehensive but lightweight solution for working with musical notes in Typescript. It provides functions, types and constants that make it easy to manipulate musical note information. Works great in conjunction with other music related libraries.
<!-- infuser end description -->

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add note-fns  
```  
NPM  
```bash  
npm install note-fns --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

```typescript
import { getNote } from 'note-fns'

console.log(getNote('A#4')) // 'A#'
```

## API

### Types

```typescript
import { Opaque } from 'type-fest'

export type Root = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
export type SharpNote = 'B#' | 'C#' | 'D#' | 'E#' | 'F#' | 'G#' | 'A#'
export type FlatNote = 'Db' | 'Eb' | 'Fb' | 'Gb' | 'Ab' | 'Bb' | 'Cb'
export type NoteName = Root | SharpNote | FlatNote

export type NoteDescription = {
  root: NoteName
  accidental?: Accidental
  accidentalType?: AccidentalType
  octave?: Octave
}

export type Direction = 1 | -1
export type Accidental = 'SHARP' | 'FLAT' | ''
export type AccidentalType = 'LETTER' | 'SYMBOL' | ''
export type Octave = number

export type ScientificNote = string
export type Interval = number

export type Scale = ReadonlyArray<NoteName>
export type Chord = ReadonlyArray<NoteName>

export type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type Hertz = Opaque<number, 'Hertz'>
export type Midi = Opaque<number, 'Midi'>
```

### Functions

These are from [music-fns](https://github.com/madewithlove/music-fns), but with typescript types.

- `accidentalToLetter`: Converts a note which has an accidental as a symbol (♭, ♯) to a note with the accidental as a letter (b, #).
- `accidentalToSymbol`: Converts a note which has an accidental as a letter (b, #) to a note with the accidental as a symbol (♭, ♯).
- `areEqual`: Returns true if the provided notes are the same notes.
- `createChord`: Creates a chord by providing a root note and intervals (use Chords).
- `createMelody`: Creates a melody using a provided array of notes and a pattern.
- `createScale`: Creates a scale (or mode) by providing a root note and an intervals (use the Scale or Mode constant).
- `flatToSharp`: Converts a flat to its sharp equivalent, this function preserves the accidental style (letter or symbol).
- `getAccidental`: Returns the accidental (or undefined) from a note.
- `getChromaticCPosition`: Returns the (0-indexed) position of the specific root within a chromatic C scale (equals the NOTES constant).
- `getDominant`: Returns the note on scale degree 5 in a diatonic scale.
- `getIntervals`: Returns one or more intervals between the provided notes.
- `getLeadingTone`: Returns the note on scale degree 7 in a diatonic scale.
- `getMediant`: Returns the note on scale degree 3 in a diatonic scale.
- `getNote`: Returns the full note (note + accidental) from a note.
- `getNoteOnDegree`: Returns the note on the provided scale degree.
- `getOctave`: Returns the octave information (or undefined) from a note.
- `getRoot`: Returns the root (only note, no accidental) from a note.
- `getSubdominant`: Returns the note on scale degree 4 in a diatonic scale.
- `getSubmediant`: Returns the note on scale degree 6 in a diatonic scale.
- `getSupertonic`: Returns the note on scale degree 2 in a diatonic scale.
- `getTonic`: Returns the note on scale degree 1 in a diatonic scale.
- `normalize`: Normalize a scale by making sure it's ascending & has a root end.
- `noteToFrequency`: Converts a note to a frequency (in Hz). You can use a different base frequency for A4 via standard.
- `noteToMidi`: Converts a note to its MIDI number. C4 = 60 in our implementation. You can provide a different middle C via standard.
- `noteToNoteDescription`: Converts a note to an object describing it.
- `noteDescriptionToNote`: Converts an object describing to a note.
- `sharpToFlat`: Converts a sharp to its flat equivalent, this function preserves the accidental style (letter or symbol).
- `transferAccidental`: Transfer the accidental type (flat or sharp) from a provided reference note
- `transferStyle`: Combination of transferAccidental and transferAccidentalStyle.
- `transpose`: Transpose a note by a specific interval (use the Interval constant). An interval can also be negative.

##### Predicates

- `areEqual`: Returns true if the provided notes are the same notes.
- `areIntervals`: Returns true if the provided numbers are intervals.
- `areNotes`: Returns true if the provided notes are notes.
- `hasAccidental`: Returns true if the note has an accidental as a symbol (♭, ♯).
- `hasAccidentalLetter`: Returns true if the note has an accidental as a letter (b, #).
- `hasAccidentalSymbol`: Returns true if the note has an accidental as a symbol (♭, ♯).
- `hasIntervalAmount`: Returns true if a scale has the provided interval amount.
- `hasOctave`: Returns true if the note has octave information.
- `haveSameOctave`: Returns true if all notes share the same octave information.
- `isAnhemitonic`: Returns true if the scale is anhemitonic (does not contain semitones).
- `isAscending`: Returns true if the scale is ascending.
- `isCohemitonic`: Returns true if the scale is cohemitonic (contains 2 or more semitones that appear consecutively in scale order).
- `isDescending`: Returns true if the scale is descending.
- `isDiatonic`: Returns true if the scale is diatonic (5 tones & 2 semitones, where the semitones are separated at least 2 steps from each other).
- `isFifth`: Returns true if the interval is a fifth (diminished, perfect or augmented) (6, 7, 8).
- `isFlat`: Returns true if the note is flat (b, ♭).
- `isHemitonic`: Returns true if the scale is hemitonic (contains 1 or more semitones).
- `isHeptatonic`: Returns true if the scale is heptatonic (7 notes per octave).
- `isHexatonic`: Returns true if the scale is hexatonic (6 notes per octave).
- `isMode`: Returns true when the provided array of notes is a mode (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian or Locrian).
- `isNatural`: Returns true if the note is natural (no accidental).
- `isNote`: Returns true if the provided value is a valid note in scientific pitch notation.
- `isOctatonic`: Returns true if the scale is octatonic (8 notes per octave).
- `isOctave`: Returns true if the interval is an octave (12).
- `isPentatonic`: Returns true if the scale is pentatonic (5 notes per octave).
- `isScale`: Returns true when the array of notes is a scale.
- `isSemitone`: Returns true if the interval is a semitone (1).
- `isSharp`: Returns true if the note is sharp (#, ♯).
- `isTone`: Returns true if the interval is a tone (2).
- `isTriad`: Returns true if the chord is a triad (a set of three notes that can be stacked in thirds).

### Scales

Note-fns exports each scale individually as well as an object `Scales` containing all of them. Example:

```typescript
import { Scales, naturalMinorScale } from 'note-fns'

console.log(Scales.naturalMinor)
console.log(naturalMinorScale)
```

Included scales:

- `algerian`: Intervals = [2, 1, 2, 1, 1, 1, 3, 1];
- `altered`: Intervals = [1, 2, 1, 2, 2, 2, 2];
- `arabic`: Intervals = [1, 3, 1, 2, 1, 3, 1];
- `augmented`: Intervals = [3, 1, 3, 1, 3, 1];
- `balinese`: Intervals = [1, 2, 4, 1, 4];
- `blues`: Intervals = [3, 2, 1, 1, 3, 2];
- `byzantine`: Intervals = [1, 3, 1, 2, 1, 3, 1];
- `chinese`: Intervals = [4, 2, 1, 4, 1];
- `chromatic`: Intervals = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
- `doubleHarmonic`: Intervals = [1, 3, 1, 2, 1, 3, 1];
- `enigmatic`: Intervals = [1, 3, 2, 2, 2, 1, 1];
- `gypsyMajor`: Intervals = [1, 3, 1, 2, 1, 3, 1];
- `harmonicMinor`: Intervals = [2, 1, 2, 2, 1, 3, 1];
- `hirajoshi`: Intervals = [1, 4, 1, 4, 2];
- `inSen`: Intervals = [1, 4, 2, 3, 2];
- `japanese`: Intervals = [1, 4, 2, 3, 2];
- `majorPentatonic`: Intervals = [2, 2, 3, 2, 3];
- `major`: Intervals = [2, 2, 1, 2, 2, 2, 1];
- `melodicMinor`: Intervals = [2, 1, 2, 2, 2, 2, 1];
- `minorPentatonic`: Intervals = [3, 2, 2, 3, 2];
- `mongolian`: Intervals = [2, 2, 3, 2, 3];
- `naturalMinor`: Intervals = [2, 1, 2, 2, 1, 2, 2];
- `pelog`: Intervals = [1, 2, 4, 1, 4];
- `prometheus`: Intervals = [2, 2, 2, 3, 1, 2];
- `wholeTone`: Intervals = [2, 2, 2, 2, 2, 2];
- `yo`: Intervals = [2, 3, 2, 2, 3];

### Modes

Similarly as with scales, note-fns exports the constants directly as well as an object `Modes` containing all of them. Example:

```typescript
import { Modes, phrygianMode } from 'note-fns'

console.log(Modes.phrygian)
console.log(phrygianMode)
```

Included Modes:

- `ionian`: Intervals = [2, 2, 1, 2, 2, 2, 1]
- `dorian`: Intervals = [2, 1, 2, 2, 2, 1, 2]
- `phrygian`: Intervals = [1, 2, 2, 2, 1, 2, 2]
- `lydian`: Intervals = [2, 2, 2, 1, 2, 2, 1]
- `mixolydian`: Intervals = [2, 2, 1, 2, 2, 1, 2]
- `aeolian`: Intervals = [2, 1, 2, 2, 1, 2, 2]
- `locrian`: Intervals = [1, 2, 2, 1, 2, 2, 2]

### Intervals

All interval consts are also exported individually, as well as with a short version and an object `Intervals` containing both short and regular names. Example:

```typescript
import { Intervals, perfectFithInterval, P5 } from 'note-fns'

console.log(Intervals.perfectFith)
console.log(perfectFithInterval)
console.log(P5)
```

Included intervals:

##### short

- `root` / `R`: Interval = 0
- `semitone` / `S`: Interval = 1
- `tone` / `T`: Interval = 2
- `tritone` / `TT`: Interval = 6
- `octave` / `O`: Interval = 12

##### minor / major

- `perfectUnison` / `P1`: Interval = 0
- `minorSecond` / `m2`: Interval = 1
- `majorSecond` / `M2`: Interval = 2
- `minorThird` / `m3`: Interval = 3
- `majorThird` / `M3`: Interval = 4
- `perfectFourth` / `P4`: Interval = 5
- `perfectFifth` / `P5`: Interval = 7
- `minorSixth` / `m6`: Interval = 8
- `majorSixth` / `M6`: Interval = 9
- `minorSeventh` / `m7`: Interval = 10
- `majorSeventh` / `M7`: Interval = 11
- `perfectOctave` / `P8`: Interval = 12

##### augmented / diminished

- `diminishedSecond` / `d2`: Interval = 0
- `augmentedUnison` / `A1`: Interval = 1
- `diminishedThird` / `d3`: Interval = 2
- `augmentedSecond` / `A2`: Interval = 3
- `diminishedFourth` / `d4`: Interval = 4
- `augmentedThird` / `A3`: Interval = 5
- `diminishedFifth` / `d5`: Interval = 6
- `augmentedFourth` / `A4`: Interval = 6
- `diminishedSixth` / `d6`: Interval = 7
- `augmentedFifth` / `A5`: Interval = 8
- `diminishedSeventh` / `d7`: Interval = 9
- `augmentedSixth` / `A6`: Interval = 10
- `diminishedEighth` / `d8`: Interval = 11
- `diminishedOctave`: Interval = 11
- `augmentedSeventh` / `A7`: Interval = 12

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start notes -->  
## Notice  
This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding.  
<!-- infuser end notes -->

<!-- infuser start license -->  
## License  

This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
  
<!-- infuser end license -->
