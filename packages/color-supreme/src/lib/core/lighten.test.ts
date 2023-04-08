import {hslToRgb} from "./hslToRgb";
import {RgbColor} from "./types";
import {rgbToHsl} from "./rgbToHsl";
import {lighten} from "./lighten";

describe('lighten', () => {
  it('should lighten the color by the specified factor', () => {
    const color: RgbColor = { red: 128, green: 128, blue: 128 }
    const factor = 0.5
    const expected: RgbColor = { red: 192, green: 192, blue: 192 }

    const hslColor = rgbToHsl(color)!
    const hslExpected = {
      hue: hslColor.hue,
      sat: hslColor.sat,
      lum: hslColor.lum + (1 - hslColor.lum) * factor,
      alpha: hslColor.alpha,
    }

    expect(lighten(color, factor)).toEqual(hslToRgb(hslExpected))
    expect(lighten(color, factor)).toEqual(expected)
  })
})
