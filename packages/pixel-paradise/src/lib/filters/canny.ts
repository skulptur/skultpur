import { ImageBuffer } from "../core/types";
import { detectEdges } from "./detectEdges";
import { nonMaximumSuppression } from "./nonMaximumSuppression";
import { gaussianBlur } from "./gaussianBlur";
import { edgeTracing } from "./edgeTracing";

export function canny(
  imageData: ImageBuffer,
  lowThreshold: number = 50,
  highThreshold: number = 100,
  apertureSize: number = 3,
  L2gradient: boolean = false
) {
  // Step 1: Gaussian smoothing
  const blurredImage = gaussianBlur(imageData, 1.4, apertureSize);

  // Step 2: Gradient calculation using Sobel operator
  const gradientImage = detectEdges(blurredImage);

  // Step 3: Non-maximum suppression and edge tracing
  const suppressedImage = nonMaximumSuppression(gradientImage, L2gradient);
  const cannyImage = edgeTracing(suppressedImage, lowThreshold, highThreshold);

  return cannyImage;
}
