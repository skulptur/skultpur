type MergeOverload = {
  <T>(source1: T): T
  <T, U>(source1: T, source2: U): T & U
  <T, U, V>(source1: T, source2: U, source3: V): T & U & V
  <T, U, V, W>(source1: T, source2: U, source3: V, source4: W): T & U & V & W
  <T, U, V, W>(source1: T, source2: U, source3: V, source4: W): T & U & V & W
  <T, U, V, W, X>(source1: T, source2: U, source3: V, source4: W, source5: X): T & U & V & W & X
}

export const merge: MergeOverload = (...args: any[]) => {
  return Object.assign({}, ...args)
}
