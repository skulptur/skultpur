// tension: low 0..1 high
// bias: 0..1,

export const hermite = (
  a: number,
  b: number,
  c: number,
  d: number,
  tension: number,
  bias: number,
  t: number
): number => {
  const t2 = t * t
  const t3 = t2 * t
  const m0 = ((b - a) * (1.0 + bias) * (1.0 - tension)) / 2.0
  const m0a = m0 + ((c - b) * (1.0 - bias) * (1.0 - tension)) / 2.0
  const m1 = ((c - b) * (1.0 + bias) * (1.0 - tension)) / 2.0
  const m1a = m1 + ((d - c) * (1.0 - bias) * (1.0 - tension)) / 2.0
  const n0 = 2.0 * t3 - 3.0 * t2 + 1.0
  const n1 = t3 - 2.0 * t2 + t
  const n2 = t3 - t2
  const n3 = -2.0 * t3 + 3.0 * t2

  return n0 * b + n1 * m0a + n2 * m1a + n3 * c
}
