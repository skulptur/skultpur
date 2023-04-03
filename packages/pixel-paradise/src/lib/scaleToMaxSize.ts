import { nearestNeighbor } from "./samplingMethods.js";
import { scale } from "./scale.js";
import { ImageBuffer } from "./types.js";

export function scaleToMaxSize(
  ImageData: ImageBuffer,
  targetMaxSize: number,
  tolerance: number = 0
): ImageBuffer {
  const { width, height } = ImageData;
  const longestSide = Math.max(width, height);

  if (
    longestSide <= targetMaxSize + tolerance ||
    longestSide <= targetMaxSize - tolerance
  ) {
    return ImageData;
  }

  const scaleFactor = targetMaxSize / longestSide;
  const newWidth = scaleFactor * width;
  const newHeight = scaleFactor * height;

  const scaledImage = scale(ImageData, newWidth, newHeight, nearestNeighbor);

  return scaledImage;
}
