import { bufferToPixels } from "./bufferToPixels.js";
import { ImageBuffer, PixelData } from "./types.js";

describe("imageUtils", () => {
  const pixelData: PixelData = {
    pixels: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
    width: 3,
    height: 1,
  };

  const imageData: ImageBuffer = {
    data: new Uint8ClampedArray([255, 0, 0, 0, 255, 0, 0, 0, 255]),
    width: 3,
    height: 1,
  };

  describe("imageDataToPixels", () => {
    it("should convert image data to an array of pixels", () => {
      expect(bufferToPixels(imageData)).toEqual(pixelData);
    });
  });
});
