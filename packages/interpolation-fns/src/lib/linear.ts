export const linear = (a: number, b: number, t: number): number => {
  return a * (1.0 - t) + b * t
}
