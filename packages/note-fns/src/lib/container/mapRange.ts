import { ExtractValue, NoteContainer } from './NoteContainer'

export const mapRange = <T extends NoteContainer>(
  note: T,
  fn: (value: ExtractValue<T>) => ExtractValue<T>
) => {
  return {
    ...note,
    value: fn(note.value as ExtractValue<T>),
  }
}
