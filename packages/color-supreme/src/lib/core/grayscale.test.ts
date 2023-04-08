import { grayscale } from './grayscale';
import { RgbColor } from './types';

describe('grayscale', () => {
    it('should convert a color to grayscale', () => {
        const inputColor: RgbColor = { red: 255, green: 128, blue: 64 };
        const expectedColor: RgbColor = { red: 149, green: 149, blue: 149 };

        expect(grayscale(inputColor)).toEqual(expectedColor);
    });

    it('should preserve the alpha channel', () => {
        const inputColor: RgbColor = { red: 255, green: 128, blue: 64, alpha: 0.5 };
        const expectedColor: RgbColor = { red: 149, green: 149, blue: 149, alpha: 0.5 };

        expect(grayscale(inputColor)).toEqual(expectedColor);
    });
});
