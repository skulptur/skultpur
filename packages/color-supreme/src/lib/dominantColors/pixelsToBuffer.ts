import { ImageBuffer, PixelData } from 'pixel-paradise'

// TODO: right now not used
/**
 * Convert an array of pixels to image data where each pixel is represented as an array of three RGB values.
 * @param {number[][]} pixels - An array of pixels where each pixel is represented as an array of three RGB values.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @returns {Uint8ClampedArray} The image data as a Uint8ClampedArray.
 */
// TODO: we are adding an extra channel here... not sure that's what we want
export function pixelsToBuffer({ pixels, width, height }: PixelData): ImageBuffer {
  const ImageBuffer = new Uint8ClampedArray(width * height * 4)
  // In this implementation, we use two index variables:
  // i for iterating over the pixels array and j for iterating over the ImageBuffer array.
  for (let i = 0, j = 0; i < pixels.length; i++, j += 4) {
    ImageBuffer[j] = pixels[i][0] // R
    ImageBuffer[j + 1] = pixels[i][1] // G
    ImageBuffer[j + 2] = pixels[i][2] // B
    ImageBuffer[j + 3] = 255 // A
  }

  return {
    data: ImageBuffer,
    width,
    height,
  }
}
