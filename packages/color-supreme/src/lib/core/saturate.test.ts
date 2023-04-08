import { saturate } from './saturate';
import {RgbColor} from "./types";

describe('saturate', () => {
    it('should not change the color when the percentage is 0', () => {
        const color: RgbColor = { red: 100, green: 100, blue: 100 };
        const result = saturate(color, 0);
        expect(result).toEqual(color);
    });

    it('should saturate a gray color to a more intense color', () => {
        const color: RgbColor = { red: 128, green: 128, blue: 128 };
        const result = saturate(color, 50);
        expect(result).toEqual({ red: 191, green: 128, blue: 128 });
    });

    it('should saturate a color to the maximum possible value', () => {
        const color: RgbColor = { red: 0, green: 128, blue: 255 };
        const result = saturate(color, 100);
        expect(result).toEqual({ red: 0, green: 255, blue: 255 });
    });

    it('should not change the saturation of a fully saturated color', () => {
        const color: RgbColor = { red: 255, green: 0, blue: 0 };
        const result = saturate(color, 50);
        expect(result).toEqual(color);
    });

    it('should handle alpha values correctly', () => {
        const color: RgbColor = { red: 128, green: 128, blue: 128, alpha: 0.5 };
        const result = saturate(color, 50);
        expect(result).toEqual({ red: 191, green: 128, blue: 128, alpha: 0.5 });
    });
});