// TODO: import from range-fns when it has it
// this was erroring with [T, T] which is correct
export type Range<T extends number> = T
