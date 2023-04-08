import {RgbColor} from "./types";
import {complement} from "./complement";

describe('complement', () => {
    it('should return the complementary color', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const expected: RgbColor = { red: 0, green: 255, blue: 255 };

        expect(complement(color)).toEqual(expected);
    });
});