import { nearestNeighbor } from "./samplingMethods";
import { scale } from "./scale";
import { BufferWithInfo } from "./types";

export function scaleToMaxSize(
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

  const scaledImage = scale(
    bufferWithInfo,
    newWidth,
    newHeight,
    nearestNeighbor
  );

  return scaledImage;
}
