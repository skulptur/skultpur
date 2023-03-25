import { ExtractData, NoteContainer } from './NoteContainer'

export const mapData = <T extends NoteContainer>(
  note: T,
  fn: (data: ExtractData<T>) => ExtractData<T>
) => {
  return {
    ...note,
    data: fn(note.data as ExtractData<T>),
  }
}
