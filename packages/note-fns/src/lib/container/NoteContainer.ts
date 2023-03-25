import { CommonData } from './CommonData'
import { Range } from '../types/Range'
import { NoteName } from '../types/types'

export type NoteContainer<
  Value = NoteName,
  Data = CommonData,
  RangeType extends number = number
> = {
  range: Range<RangeType>
  value: Value
  data: Data
}
export type ExtractValue<T> = T extends NoteContainer<infer Value, any, any> ? Value : never
export type ExtractData<T> = T extends NoteContainer<any, infer Data, any> ? Data : never
export type ExtractRangeType<T> = T extends NoteContainer<any, any, infer RangeType>
  ? RangeType
  : never
