import {RgbColor} from "./types";
import {triadic} from "./triadic";

describe('triadic', () => {
    it('should return the triadic colors', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const expected: [RgbColor, RgbColor] = [
            { red: 0, green: 255, blue: 0 },
            { red: 0, green: 0, blue: 255 },
        ];

        expect(triadic(color)).toEqual(expected);
    });
});