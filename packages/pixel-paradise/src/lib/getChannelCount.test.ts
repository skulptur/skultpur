import { times } from "data-fns";
import { getChannelCount } from "./getChannelCount.js";
import { ChannelCount } from "./types.js";

describe("getImageChannelCount", () => {
  const size = {
    width: 2,
    height: 2,
  };
  it("should return 4 when the image data has 4 channels", () => {
    const buffer = new Uint8ClampedArray(times(2 * 2 * 4));
    const expected: ChannelCount = 4;
    const result = getChannelCount({ buffer, ...size });

    expect(result).toEqual(expected);
  });

  it("should return 3 when the image data has 3 channels", () => {
    const buffer = new Uint8ClampedArray(times(2 * 2 * 3));
    const expected: ChannelCount = 3;
    const result = getChannelCount({ buffer, ...size });

    expect(result).toEqual(expected);
  });

  it("should return 1 when the image data has 1 channel", () => {
    const buffer = new Uint8ClampedArray(times(2 * 2));
    const expected: ChannelCount = 1;
    const result = getChannelCount({ buffer, ...size });

    expect(result).toEqual(expected);
  });

  it("should return null when the image data has 0 channels", () => {
    const buffer = new Uint8ClampedArray([]);
    const expected = null;
    const result = getChannelCount({ buffer, ...size });

    expect(result).toEqual(expected);
  });

  it("should return null when the channel count is greater than 4", () => {
    const buffer = new Uint8ClampedArray(times(2 * 2 * 5));
    const expected = null;
    const result = getChannelCount({ buffer, ...size });

    expect(result).toEqual(expected);
  });

  it("should return null when the channel count is less than 1", () => {
    const buffer = new Uint8ClampedArray([0, 0, 0]);
    const expected = null;
    const result = getChannelCount({ buffer, ...size });

    expect(result).toEqual(expected);
  });
});
