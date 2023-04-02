import { BufferWithInfo, PixelsWithInfo, RGBColor } from "./types.js";

/**
 * Convert image data to an array of pixels where each pixel is represented as an array of three RGB values.
 * @param {Buffer | Uint8ClampedArray} imageData - The image data to convert along with its width and height.
 * @returns {number[][]} An array of pixels where each pixel is represented as an array of three RGB values.
 */
export function bufferToPixels(imageData: BufferWithInfo): PixelsWithInfo {
  const { buffer, width, height } = imageData;

  const pixels: RGBColor[] = [];

  // TODO: we're always just only using the colors here, not alpha
  for (let i = 0; i < buffer.length; i += 3) {
    const r = buffer[i];
    const g = buffer[i + 1];
    const b = buffer[i + 2];
    pixels.push([r, g, b]);
  }

  return {
    pixels,
    width,
    height,
  };
}
