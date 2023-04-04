import { ImageBuffer } from "../core/types";

export function gaussianBlur(
  imageData: ImageBuffer,
  sigma: number,
  kernelSize: number
): ImageBuffer {
  const { width, height, data } = imageData;
  const resultData = new Uint8ClampedArray(width * height * 4);

  function createGaussianKernel(sigma: number, kernelSize: number): number[][] {
    const kernel = new Array(kernelSize)
      .fill(null)
      .map(() => new Array(kernelSize).fill(0));
    const halfSize = Math.floor(kernelSize / 2);
    const sigmaSq = sigma * sigma;
    const piSigmaSq = Math.PI * sigmaSq;
    let sum = 0;

    for (let y = -halfSize; y <= halfSize; y++) {
      for (let x = -halfSize; x <= halfSize; x++) {
        const g = (1 / piSigmaSq) * Math.exp(-(x * x + y * y) / (2 * sigmaSq));
        kernel[y + halfSize][x + halfSize] = g;
        sum += g;
      }
    }

    // Normalize the kernel
    for (let y = 0; y < kernelSize; y++) {
      for (let x = 0; x < kernelSize; x++) {
        kernel[y][x] /= sum;
      }
    }

    return kernel;
  }

  const kernel = createGaussianKernel(sigma, kernelSize);
  const halfSize = Math.floor(kernelSize / 2);

  function applyKernel(x: number, y: number): [number, number, number, number] {
    let r = 0,
      g = 0,
      b = 0,
      a = 0;

    for (let ky = -halfSize; ky <= halfSize; ky++) {
      for (let kx = -halfSize; kx <= halfSize; kx++) {
        const px = Math.min(Math.max(x + kx, 0), width - 1);
        const py = Math.min(Math.max(y + ky, 0), height - 1);
        const weight = kernel[ky + halfSize][kx + halfSize];
        const idx = (py * width + px) * 4;

        r += data[idx] * weight;
        g += data[idx + 1] * weight;
        b += data[idx + 2] * weight;
        a += data[idx + 3] * weight;
      }
    }

    return [r, g, b, a];
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = applyKernel(x, y);
      const idx = (y * width + x) * 4;

      resultData[idx] = r;
      resultData[idx + 1] = g;
      resultData[idx + 2] = b;
      resultData[idx + 3] = a;
    }
  }

  return {
    width,
    height,
    data: resultData,
  };
}
