import { isAccessible } from './isAccessible';
import { RgbColor } from './types';

describe('isAccessible', () => {
    const black: RgbColor = { red: 0, green: 0, blue: 0 };
    const white: RgbColor = { red: 255, green: 255, blue: 255 };

    it('should return true for accessible colors (AA)', () => {
        expect(isAccessible(black, white, 'AA')).toBe(true);
    });

    it('should return true for accessible colors (AAA)', () => {
        expect(isAccessible(black, white, 'AAA')).toBe(true);
    });

    it('should return false for inaccessible colors (AA)', () => {
        const color1: RgbColor = { red: 150, green: 150, blue: 150 };
        const color2: RgbColor = { red: 160, green: 160, blue: 160 };
        expect(isAccessible(color1, color2, 'AA')).toBe(false);
    });

    it('should return false for inaccessible colors (AAA)', () => {
        const color1: RgbColor = { red: 100, green: 100, blue: 100 };
        const color2: RgbColor = { red: 150, green: 150, blue: 150 };
        expect(isAccessible(color1, color2, 'AAA')).toBe(false);
    });
});
