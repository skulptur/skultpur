export const cubic = (
  a: number,
  b: number,
  c: number,
  d: number,
  t: number
): number => {
  const t2 = t * t
  const n0 = d - c - a + b
  const n1 = a - b - n0
  const n2 = c - a

  return n0 * t * t2 + n1 * t2 + n2 * t + b
}
