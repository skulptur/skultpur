import {RgbColor} from "./types";
import {tint} from "./tint";
import {mix} from "./mix";

describe('tint', () => {
    it('should mix the color with white by the specified factor', () => {
        const color: RgbColor = { red: 128, green: 128, blue: 128 };
        const factor = 0.5;
        const white: RgbColor = { red: 255, green: 255, blue: 255 };
        const expected: RgbColor = { red: 192, green: 192, blue: 192 };

        expect(tint(color, factor)).toEqual(mix(color, white, factor));
        expect(tint(color, factor)).toEqual(expected);
    });
});