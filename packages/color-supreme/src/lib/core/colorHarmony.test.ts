import {RgbColor} from "./types";
import {colorHarmony} from "./colorHarmony";

describe('colorHarmony', () => {
    it('should return the color harmony for a given scheme', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const scheme = 'complementary';
        const expected: RgbColor[] = [{ red: 0, green: 255, blue: 255 }];

        expect(colorHarmony(color, scheme)).toEqual(expected);
    });
});