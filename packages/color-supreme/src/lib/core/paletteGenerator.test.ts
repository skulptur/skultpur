import {paletteGenerator} from "./paletteGenerator";
import {RgbColor} from "./types";

describe('paletteGenerator', () => {
    it('should return a palette for a given scheme', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const scheme = 'complementary';
        const expected: RgbColor[] = [{ red: 0, green: 255, blue: 255 }];

        expect(paletteGenerator(color, scheme)).toEqual(expected);
    });
});