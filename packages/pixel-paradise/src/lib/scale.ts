import { getImageChannelCount } from "./getImageChannelCount.js";
import { nearestNeighbor } from "./samplingMethods.js";
import { BufferWithInfo, SamplingMethod } from "./types.js";

export function scale(
  bufferWithInfo: BufferWithInfo,
  targetWidth: number,
  targetHeight: number,
  samplingMethod: SamplingMethod = nearestNeighbor
): BufferWithInfo {
  const { buffer, width, height } = bufferWithInfo;
  const channels = getImageChannelCount(bufferWithInfo) || 0;
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
    buffer: scaledImageData,
    width: newWidth,
    height: newHeight,
  };
}
