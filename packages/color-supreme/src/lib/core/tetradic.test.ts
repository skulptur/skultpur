import {RgbColor} from "./types";
import {tetradic} from "./tetradic";

describe('tetradic', () => {
    it('should return the tetradic colors', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const angle = 90;
        const expected: [RgbColor, RgbColor, RgbColor] = [
            { red: 0, green: 255, blue: 0 },
            { red: 0, green: 0, blue: 255 },
            { red: 0, green: 255, blue: 255 },
        ];

        expect(tetradic(color, angle)).toEqual(expected);
    });
});