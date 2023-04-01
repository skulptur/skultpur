export const catmullRom = (
  a: number,
  b: number,
  c: number,
  d: number,
  t: number
) => {
  const t2 = t * t

  const n0 = -0.5 * a + 1.5 * b - 1.5 * c + 0.5 * d
  const n1 = a - 2.5 * b + 2.0 * c - 0.5 * d
  const n2 = -0.5 * a + 0.5 * c

  return n0 * t * t2 + n1 * t2 + n2 * t + b
}
