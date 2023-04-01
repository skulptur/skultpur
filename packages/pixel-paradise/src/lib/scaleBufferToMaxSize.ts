import { nearestNeighbor } from "./samplingMethods";
import { scaleBuffer } from "./scale";
import { BufferWithInfo } from "./types";

export function scaleBufferToMaxSize(
  bufferWithInfo: BufferWithInfo,
  targetMaxSize: number,
  tolerance: number = 0
): BufferWithInfo {
  const { width, height } = bufferWithInfo;
  const longestSide = Math.max(width, height);

  if (
    longestSide <= targetMaxSize + tolerance ||
    longestSide <= targetMaxSize - tolerance
  ) {
    return bufferWithInfo;
  }

  const scaleFactor = targetMaxSize / longestSide;
  const newWidth = scaleFactor * width;
  const newHeight = scaleFactor * height;

  const scaledImage = scaleBuffer(
    bufferWithInfo,
    newWidth,
    newHeight,
    nearestNeighbor
  );

  return scaledImage;
}
