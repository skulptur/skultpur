import {hslToRgb} from "./hslToRgb";
import {RgbColor} from "./types";
import {rgbToHsl} from "./rgbToHsl";
import {darken} from "./darken";

describe('darken', () => {
    it('should darken the color by the specified factor', () => {
        const color: RgbColor = { red: 128, green: 128, blue: 128 };
        const factor = 0.5;
        const expected: RgbColor = { red: 64, green: 64, blue: 64 };

        const hslColor = rgbToHsl(color)!;
        const hslExpected = {
            hue: hslColor.hue,
            sat: hslColor.sat,
            lum: hslColor.lum * (1 - factor),
            alpha: hslColor.alpha,
        };

        expect(darken(color, factor)).toEqual(hslToRgb(hslExpected));
        expect(darken(color, factor)).toEqual(expected);
    });
});