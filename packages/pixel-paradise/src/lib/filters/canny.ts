import { ImageBuffer } from "../types";
import { detectEdges } from "./detectEdges";
import { nonMaximumSuppression } from "./nonMaximumSuppression";
import { gaussianBlur } from "./gaussianBlur";

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

  return {
    gradientImage,
    cannyImage,
  };
}

function edgeTracing(
  suppressedImage: ImageBuffer,
  lowThreshold: number,
  highThreshold: number
): ImageBuffer {
  const { width, height, data } = suppressedImage;
  const cannyData = new Uint8ClampedArray(width * height * 4);

  function traceEdges(x: number, y: number): void {
    if (x < 0 || x >= width || y < 0 || y >= height) return;

    const idx = y * width + x;

    if (cannyData[idx * 4] !== 0) return; // Already visited

    const edgeStrength = data[idx];

    if (edgeStrength < highThreshold) return; // Not a strong edge

    cannyData[idx * 4] = 255;
    cannyData[idx * 4 + 1] = 255;
    cannyData[idx * 4 + 2] = 255;
    cannyData[idx * 4 + 3] = 255;

    const neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x - 1, y - 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x + 1, y - 1],
    ];

    for (const [nx, ny] of neighbors) {
      traceEdges(nx, ny);
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const edgeStrength = data[idx];

      if (edgeStrength >= highThreshold) {
        traceEdges(x, y);
      } else if (edgeStrength >= lowThreshold) {
        cannyData[idx * 4] = 255;
        cannyData[idx * 4 + 1] = 255;
        cannyData[idx * 4 + 2] = 255;
        cannyData[idx * 4 + 3] = 255;
      } else {
        cannyData[idx * 4] = 0;
        cannyData[idx * 4 + 1] = 0;
        cannyData[idx * 4 + 2] = 0;
        cannyData[idx * 4 + 3] = 255;
      }
    }
  }

  return {
    width,
    height,
    data: cannyData,
  };
}
