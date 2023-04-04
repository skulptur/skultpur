import { bufferToPixels } from './bufferToPixels.js'
import { ImageBuffer } from 'pixel-paradise'
import { PixelData } from './types'

describe('imageUtils', () => {
  const pixelData: PixelData = {
    pixels: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
    width: 3,
    height: 1,
  }

  const ImageBuffer: ImageBuffer = {
    data: new Uint8ClampedArray([255, 0, 0, 0, 255, 0, 0, 0, 255]),
    width: 3,
    height: 1,
  }

  describe('ImageBufferToPixels', () => {
    it('should convert image data to an array of pixels', () => {
      expect(bufferToPixels(ImageBuffer)).toEqual(pixelData)
    })
  })
})
