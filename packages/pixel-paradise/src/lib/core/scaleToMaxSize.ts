import { nearestNeighbor } from "./samplingMethods.js";
import { scale } from "./scale.js";
import { ImageBuffer } from "./types.js";

export function scaleToMaxSize(
  ImageData: ImageBuffer,
  targetMaxSize: number,
  tolerance: number = 0 // useful if you don't actually need the image but want to use for analysis... then it is faster to not downscale within a tolerance
): ImageBuffer {
  const { width, height } = ImageData;
  const longestSide = Math.max(width, height);

  // skip if we don't need to process
  if (longestSide <= targetMaxSize + tolerance) {
    return ImageData;
  }

  const scaleFactor = targetMaxSize / longestSide;
  const newWidth = scaleFactor * width;
  const newHeight = scaleFactor * height;

  const scaledImage = scale(ImageData, newWidth, newHeight, nearestNeighbor);

  return scaledImage;
}
