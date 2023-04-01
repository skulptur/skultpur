export const nearest = (a: number, b: number, t: number): number => {
  return t < 0.5 ? a : b
}
