import {contrastRatio} from "./contrastRatio";
import {RgbColor} from "./types";

describe('contrastRatio', () => {
    it('should return the contrast ratio between two colors', () => {
        const color1: RgbColor = { red: 255, green: 255, blue: 255 };
        const color2: RgbColor = { red: 0, green: 0, blue: 0 };
        const expected = 21;

        expect(contrastRatio(color1, color2)).toEqual(expected);
    });
});