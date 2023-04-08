import { formatColor } from './formatColor';
import { RgbColor, HslColor, HexColor, CmykColor } from './types';

describe('formatColor', () => {
    it('should format colors correctly', () => {
        const rgbColor: RgbColor = { red: 255, green: 0, blue: 0 };
        const hslColor: HslColor = { hue: 0, lum: 0.5, sat: 1 };
        const hexColor: HexColor = { red: 'FF', green: '00', blue: '00' };
        const cmykColor: CmykColor = { cyan: 0, magenta: 1, yellow: 1, key: 0 };

        expect(formatColor(rgbColor, 'rgb')).toEqual('rgb(255, 0, 0)');
        expect(formatColor(hslColor, 'hsl')).toEqual('hsl(0, 100%, 50%)');
        expect(formatColor(hexColor, 'hex')).toEqual('#FF0000');
        expect(formatColor(cmykColor, 'cmyk')).toEqual('cmyk(0%, 100%, 100%, 0%)');
    });
});