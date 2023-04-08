import {RgbColor} from "./types";
import {hslToRgb} from "./hslToRgb";
import {desaturate} from "./desaturate";
import {rgbToHsl} from "./rgbToHsl";

describe('desaturate', () => {
    it('should desaturate the color by the specified factor', () => {
        const color: RgbColor = { red: 128, green: 128, blue: 128 };
        const factor = 0.5;
        const expected: RgbColor = { red: 128, green: 128, blue: 128 };

        const hslColor = rgbToHsl(color)!;
        const hslExpected = {
            hue: hslColor.hue,
            sat: hslColor.sat * (1 - factor),
            lum: hslColor.lum,
            alpha: hslColor.alpha,
        };

        expect(desaturate(color, factor)).toEqual(hslToRgb(hslExpected));
        expect(desaturate(color, factor)).toEqual(expected);
    });
});