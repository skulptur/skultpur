export type ChannelCount = 1 | 2 | 3 | 4;

export type ImageBuffer = {
  width: number;
  height: number;
  data: Buffer | Uint8ClampedArray;
};

export type SamplingMethod = (
  srcX: number,
  srcY: number,
  imageData: Uint8ClampedArray | Buffer,
  width: number,
  height: number,
  channels: number
) => Uint8Array;
