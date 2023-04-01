export const cosine = (a: number, b: number, t: number): number => {
  const t2 = (1.0 - Math.cos(t * Math.PI)) / 2.0

  return a * (1.0 - t2) + b * t2
}
