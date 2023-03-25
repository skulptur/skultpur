import { LabColor } from './types'

const sqrt = Math.sqrt
const pow = Math.pow
const cos = Math.cos
const atan2 = Math.atan2
const sin = Math.sin
const abs = Math.abs
const exp = Math.exp
const PI = Math.PI

/**
 * Implemented as in "The CIEDE2000 Color-Difference Formula:
 * Implementation Notes, Supplementary Test Data, and Mathematical Observations"
 * by Gaurav Sharma, Wencheng Wu and Edul N. Dalal.
 */
/**
 * Returns diff between c1 and c2 using the CIEDE2000 algorithm
 * @param {labcolor} c1    Should have fields L,a,b
 * @param {labcolor} c2    Should have fields L,a,b
 * @return {float}   Difference between c1 and c2
 */
export function ciede2000(c1: LabColor, c2: LabColor): number {
  // Get L,a,b values for color 1
  const L1 = c1.L
  const a1 = c1.a
  const b1 = c1.b

  // Get L,a,b values for color 2
  const L2 = c2.L
  const a2 = c2.a
  const b2 = c2.b

  // Weight factors
  const kL = 1
  const kC = 1
  const kH = 1

  /**
   * Step 1: Calculate C1p, C2p, h1p, h2p
   */
  const C1 = sqrt(pow(a1, 2) + pow(b1, 2)) //(2)
  const C2 = sqrt(pow(a2, 2) + pow(b2, 2)) //(2)

  const a_C1_C2 = (C1 + C2) / 2.0 //(3)

  const G = 0.5 * (1 - sqrt(pow(a_C1_C2, 7.0) / (pow(a_C1_C2, 7.0) + pow(25.0, 7.0)))) //(4)

  const a1p = (1.0 + G) * a1 //(5)
  const a2p = (1.0 + G) * a2 //(5)

  const C1p = sqrt(pow(a1p, 2) + pow(b1, 2)) //(6)
  const C2p = sqrt(pow(a2p, 2) + pow(b2, 2)) //(6)

  const h1p = hp_f(b1, a1p) //(7)
  const h2p = hp_f(b2, a2p) //(7)

  /**
   * Step 2: Calculate dLp, dCp, dHp
   */
  const dLp = L2 - L1 //(8)
  const dCp = C2p - C1p //(9)

  const dhp = dhp_f(C1, C2, h1p, h2p) //(10)
  const dHp = 2 * sqrt(C1p * C2p) * sin(radians(dhp) / 2.0) //(11)

  /**
   * Step 3: Calculate CIEDE2000 Color-Difference
   */
  const a_L = (L1 + L2) / 2.0 //(12)
  const a_Cp = (C1p + C2p) / 2.0 //(13)

  const a_hp = a_hp_f(C1, C2, h1p, h2p) //(14)
  const T =
    1 -
    0.17 * cos(radians(a_hp - 30)) +
    0.24 * cos(radians(2 * a_hp)) +
    0.32 * cos(radians(3 * a_hp + 6)) -
    0.2 * cos(radians(4 * a_hp - 63)) //(15)
  const d_ro = 30 * exp(-pow((a_hp - 275) / 25, 2)) //(16)
  const RC = sqrt(pow(a_Cp, 7.0) / (pow(a_Cp, 7.0) + pow(25.0, 7.0))) //(17)
  const SL = 1 + (0.015 * pow(a_L - 50, 2)) / sqrt(20 + pow(a_L - 50, 2.0)) //(18)
  const SC = 1 + 0.045 * a_Cp //(19)
  const SH = 1 + 0.015 * a_Cp * T //(20)
  const RT = -2 * RC * sin(radians(2 * d_ro)) //(21)
  const dE = sqrt(
    pow(dLp / (SL * kL), 2) +
      pow(dCp / (SC * kC), 2) +
      pow(dHp / (SH * kH), 2) +
      RT * (dCp / (SC * kC)) * (dHp / (SH * kH))
  ) //(22)
  return dE
}

// internal
function degrees(n: number) {
  return n * (180 / PI)
}
function radians(n: number) {
  return n * (PI / 180)
}

function hp_f(x: number, y: number) {
  //(7)
  if (x === 0 && y === 0) return 0
  else {
    const tmphp = degrees(atan2(x, y))
    if (tmphp >= 0) return tmphp
    else return tmphp + 360
  }
}

function dhp_f(C1: number, C2: number, h1p: number, h2p: number) {
  //(10)
  if (C1 * C2 === 0) return 0
  else if (abs(h2p - h1p) <= 180) return h2p - h1p
  else if (h2p - h1p > 180) return h2p - h1p - 360
  else if (h2p - h1p < -180) return h2p - h1p + 360
  else throw new Error()
}

function a_hp_f(C1: number, C2: number, h1p: number, h2p: number) {
  //(14)
  if (C1 * C2 === 0) return h1p + h2p
  else if (abs(h1p - h2p) <= 180) return (h1p + h2p) / 2.0
  else if (abs(h1p - h2p) > 180 && h1p + h2p < 360) return (h1p + h2p + 360) / 2.0
  else if (abs(h1p - h2p) > 180 && h1p + h2p >= 360) return (h1p + h2p - 360) / 2.0
  else throw new Error()
}
