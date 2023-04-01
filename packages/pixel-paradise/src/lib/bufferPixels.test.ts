import { bufferToPixels } from "./bufferToPixels";
import { BufferWithInfo, PixelsWithInfo } from "./types";

describe("imageUtils", () => {
  const pixelData: PixelsWithInfo = {
    pixels: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
    width: 3,
    height: 1,
  };

  const imageData: BufferWithInfo = {
    buffer: new Uint8ClampedArray([255, 0, 0, 0, 255, 0, 0, 0, 255]),
    width: 3,
    height: 1,
  };

  describe("imageDataToPixels", () => {
    it("should convert image data to an array of pixels", () => {
      expect(bufferToPixels(imageData)).toEqual(pixelData);
    });
  });

  // describe('pixelsToImageData', () => {
  //   it('should convert an array of pixels to image data', () => {
  //     expect(pixelsToImageData(pixelData)).toEqual(imageData)
  //   })
  // })

  // describe('pixelsToImageData', () => {
  //   it('should convert an array of pixels to image data', () => {
  //     expect(pixelsToImageData(pixels, 3, 1)).toEqual(imageData)
  //   })
  // })

  // it('should convert pixels to image data and back', () => {
  //   const convertedImageData = pixelsToImageData(pixels, 3, 1)
  //   expect(imageDataToPixels(convertedImageData)).toEqual(pixels)
  // })
});
