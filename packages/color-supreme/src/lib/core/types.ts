export type CmykColor = {
  alpha?: number
  cyan: number
  magenta: number
  yellow: number
  key: number
}

export type HexColor = {
  alpha?: string
  red: string
  green: string
  blue: string
}

export type HslColor = {
  hue: number
  lum: number
  sat: number
  alpha?: number
}

export type HsvColor = {
  hue: number
  val: number
  sat: number
  alpha?: number
}

export type RgbColor = {
  alpha?: number
  red: number
  green: number
  blue: number
}

export type ColorNameLookup = {
  [k: string]: string
}
