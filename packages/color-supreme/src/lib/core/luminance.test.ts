import {RgbColor} from "./types";
import {luminance} from "./luminance";

describe('luminance', () => {
    it('should return the luminance of the color', () => {
        const color: RgbColor = { red: 255, green: 255, blue: 255 };
        const expected = 1;

        expect(luminance(color)).toEqual(expected);
    });
});