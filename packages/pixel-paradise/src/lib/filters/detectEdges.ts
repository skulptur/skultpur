import { ImageBuffer } from "../core/types";

type EdgeOperator = keyof typeof kernels;

const kernels = {
  prewitt: {
    kernelX: [
      [-1, 0, 1],
      [-1, 0, 1],
      [-1, 0, 1],
    ],
    kernelY: [
      [-1, -1, -1],
      [0, 0, 0],
      [1, 1, 1],
    ],
  },
  sobel: {
    kernelX: [
      [-1, 0, 1],
      [-2, 0, 2],
      [-1, 0, 1],
    ],
    kernelY: [
      [-1, -2, -1],
      [0, 0, 0],
      [1, 2, 1],
    ],
  },
  scharr: {
    kernelX: [
      [-3, 0, 3],
      [-10, 0, 10],
      [-3, 0, 3],
    ],
    kernelY: [
      [-3, -10, -3],
      [0, 0, 0],
      [3, 10, 3],
    ],
  },
};

export function detectEdges(
  imageData: ImageBuffer,
  kernel: EdgeOperator = "sobel"
): ImageBuffer {
  const { kernelX, kernelY } = kernels[kernel];
  const { width, height, data } = imageData;
  const resultData = new Uint8ClampedArray(width * height * 4);

  function getPixel(x: number, y: number): number {
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x >= width) x = width - 1;
    if (y >= height) y = height - 1;

    const offset = (y * width + x) * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    return 0.299 * r + 0.587 * g + 0.114 * b; // Convert to grayscale
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let gradientX = 0;
      let gradientY = 0;

      for (let j = -1; j <= 1; j++) {
        for (let i = -1; i <= 1; i++) {
          const pixel = getPixel(x + i, y + j);
          gradientX += pixel * kernelX[j + 1][i + 1];
          gradientY += pixel * kernelY[j + 1][i + 1];
        }
      }

      const offset = (y * width + x) * 4;
      resultData[offset] = Math.abs(gradientX); // R channel
      resultData[offset + 1] = Math.abs(gradientY); // G channel
      resultData[offset + 2] = 0; // B channel
      resultData[offset + 3] = 255; // A channel
    }
  }

  return {
    width,
    height,
    data: resultData,
  };
}
