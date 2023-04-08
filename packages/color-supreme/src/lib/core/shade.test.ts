import {RgbColor} from "./types";
import {shade} from "./shade";
import {mix} from "./mix";

describe('shade', () => {
    it('should mix the color with black by the specified factor', () => {
        const color: RgbColor = { red: 128, green: 128, blue: 128 };
        const factor = 0.5;
        const black: RgbColor = { red: 0, green: 0, blue: 0 };
        const expected: RgbColor = { red: 64, green: 64, blue: 64 };

        expect(shade(color, factor)).toEqual(mix(color, black, factor));
        expect(shade(color, factor)).toEqual(expected);
    });
});