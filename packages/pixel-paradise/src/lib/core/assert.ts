import { getChannelCount } from "./getChannelCount";
import { ImageBuffer } from "./types";

export const assertSameSize = (imageA: ImageBuffer, imageB: ImageBuffer) => {
  if (imageA.width !== imageB.width || imageA.height !== imageB.height) {
    throw new Error("Images must have same size.");
  }

  return { width: imageA.width, height: imageA.height };
};

export const assertSameChannelCount = (
  imageA: ImageBuffer,
  imageB: ImageBuffer
) => {
  const channels = getChannelCount(imageA);

  if (channels !== getChannelCount(imageB)) {
    throw new Error("Images must have the same number of channels.");
  }

  return channels;
};

export const assertSameSizeAndChannelCount = (
  imageA: ImageBuffer,
  imageB: ImageBuffer
) => {
  const size = assertSameSize(imageA, imageB);
  const channels = assertSameChannelCount(imageA, imageB);
  return {
    ...size,
    channels,
  };
};
