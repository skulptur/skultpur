import { ImageBuffer } from "../core/types";

export function edgeTracing(
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
