/**
 * Represents an RGB color as a tuple of three numbers, where each number corresponds to
 * a color channel (Red, Green, Blue) and ranges from 0 to 255.
 * @typedef { [number, number, number] } RGBColor
 */
export type RGBColor = [number, number, number];

export type ChannelCount = 1 | 2 | 3 | 4;

export type ImageInfo = {
  width: number;
  height: number;
};

export type BufferWithInfo = ImageInfo & {
  buffer: Buffer | Uint8ClampedArray;
};

export type PixelsWithInfo = ImageInfo & {
  pixels: Array<RGBColor>;
};

export type LabColor = { L: number; a: number; b: number };

export type SamplingMethod = (
  srcX: number,
  srcY: number,
  imageData: Uint8ClampedArray | Buffer,
  width: number,
  height: number,
  channels: number
) => Uint8Array;
