import { closestNamedColor } from './closestNamedColor';
import { RgbColor } from './types';

describe('closestNamedColor', () => {
    it('should return the closest named color', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const colorNameLookup = {
            red: '#FF0000',
            green: '#00FF00',
            blue: '#0000FF',
        };
        const expected = 'red';

        expect(closestNamedColor(color, colorNameLookup)).toEqual(expected);
    });
});