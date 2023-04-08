import {colorDifference} from "./colorDifference";
import {RgbColor} from "./types";

describe('colorDifference', () => {
    it('should return the color difference between two colors', () => {
        const color1: RgbColor = { red: 255, green: 255, blue: 255 };
        const color2: RgbColor = { red: 0, green: 0, blue: 0 };
        const expected = 765;

        expect(colorDifference(color1, color2)).toEqual(expected);
    });
});