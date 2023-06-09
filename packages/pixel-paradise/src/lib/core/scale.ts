import { getChannelCount } from "./getChannelCount.js";
import { nearestNeighbor } from "./samplingMethods.js";
import { ImageBuffer, SamplingMethod } from "./types.js";

export function scale(
  ImageData: ImageBuffer,
  targetWidth: number,
  targetHeight: number,
  samplingMethod: SamplingMethod = nearestNeighbor
): ImageBuffer {
  const { data: buffer, width, height } = ImageData;
  const channels = getChannelCount(ImageData);
  const newWidth = Math.round(targetWidth);
  const newHeight = Math.round(targetHeight);
  const scaleFactorX = newWidth / width;
  const scaleFactorY = newHeight / height;
  const scaledImageData = new Uint8ClampedArray(
    newWidth * newHeight * channels
  );

  for (let y = 0; y < newHeight; y++) {
    for (let x = 0; x < newWidth; x++) {
      const srcX = x / scaleFactorX;
      const srcY = y / scaleFactorY;
      const sampledPixel = samplingMethod(
        srcX,
        srcY,
        buffer,
        width,
        height,
        channels
      );

      for (let c = 0; c < channels; c++) {
        const dstIndex = (y * newWidth + x) * channels + c;
        scaledImageData[dstIndex] = sampledPixel[c];
      }
    }
  }

  return {
    data: scaledImageData,
    width: newWidth,
    height: newHeight,
  };
}
