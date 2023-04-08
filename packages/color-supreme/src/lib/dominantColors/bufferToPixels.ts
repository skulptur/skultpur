import { ImageBuffer, getChannelCount } from 'pixel-paradise'
import { PixelData, RGBColor } from './types'

/**
 * Convert image data to an array of pixels where each pixel is represented as an array of three RGB values.
 * @param {Buffer | Uint8ClampedArray} ImageBuffer - The image data to convert along with its width and height.
 * @returns {number[][]} An array of pixels where each pixel is represented as an array of three RGB values.
 */
export function bufferToPixels(ImageBuffer: ImageBuffer): PixelData {
  const { data: buffer, width, height } = ImageBuffer
  const channels = getChannelCount(ImageBuffer)!

  const pixels: RGBColor[] = []

  // TODO: we're always just only using the colors here, not alpha
  for (let i = 0; i < buffer.length; i += channels) {
    const r = buffer[i]
    const g = buffer[i + 1]
    const b = buffer[i + 2]
    pixels.push([r, g, b])
  }

  return {
    pixels,
    width,
    height,
  }
}
