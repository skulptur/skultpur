import {hueShift} from "./hueShift";
import {RgbColor} from "./types";

describe('hueShift', () => {
    it('should return the color with hue shifted by the specified angle', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const angle = 120;
        const expected: RgbColor = { red: 0, green: 255, blue: 0 };

        expect(hueShift(color, angle)).toEqual(expected);
    });
});