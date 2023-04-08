import {RgbColor} from "./types";
import {analogous} from "./analogous";

describe('analogous', () => {
    it('should return the analogous colors', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const angle = 30;
        const expected: [RgbColor, RgbColor] = [
            { red: 255, green: 128, blue: 0 },
            { red: 255, green: 0, blue: 128 },
        ];

        expect(analogous(color, angle)).toEqual(expected);
    });
});