import {RgbColor} from "./types";
import {monochromatic} from "./monochromatic";

describe('monochromatic', () => {
    it('should return the monochromatic colors', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const count = 5;
        const expected: RgbColor[] = [
            { red: 51, green: 0, blue: 0 },
            { red: 102, green: 0, blue: 0 },
            { red: 153, green: 0, blue: 0 },
            { red: 204, green: 0, blue: 0 },
            { red: 255, green: 0, blue: 0 },
        ];

        expect(monochromatic(color, count)).toEqual(expected);
    });
});