import { invert } from './invert';
import { RgbColor } from './types';

describe('invert', () => {
    it('should invert a color', () => {
        const inputColor: RgbColor = { red: 255, green: 128, blue: 64 };
        const expectedColor: RgbColor = { red: 0, green: 127, blue: 191 };

        expect(invert(inputColor)).toEqual(expectedColor);
    });

    it('should preserve the alpha channel', () => {
        const inputColor: RgbColor = { red: 255, green: 128, blue: 64, alpha: 0.5 };
        const expectedColor: RgbColor = { red: 0, green: 127, blue: 191, alpha: 0.5 };

        expect(invert(inputColor)).toEqual(expectedColor);
    });
});
