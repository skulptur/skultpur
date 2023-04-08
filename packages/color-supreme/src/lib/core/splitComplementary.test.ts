import {RgbColor} from "./types";
import {splitComplementary} from "./splitComplementary";

describe('splitComplementary', () => {
    it('should return the split complementary colors', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const angle = 150;
        const expected: [RgbColor, RgbColor] = [
            { red: 0, green: 255, blue: 153 },
            { red: 0, green: 102, blue: 255 },
        ];

        expect(splitComplementary(color, angle)).toEqual(expected);
    });
});