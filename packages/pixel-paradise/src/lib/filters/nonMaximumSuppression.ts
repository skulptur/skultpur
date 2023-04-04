import { ImageBuffer } from "../core/types";

export function nonMaximumSuppression(
  gradientImage: ImageBuffer,
  L2gradient: boolean
): ImageBuffer {
  const { width, height, data } = gradientImage;
  const suppressedData = new Uint8ClampedArray(width * height);

  function gradientAt(x: number, y: number): { gx: number; gy: number } {
    const idx = (y * width + x) * 4;
    return {
      gx: data[idx],
      gy: data[idx + 1],
    };
  }

  // TODO: ask AI to use interpolation for better results
  function interpolate(a: number, b: number, weight: number): number {
    return a * (1 - weight) + b * weight;
  }

  function inBounds(x: number, y: number): boolean {
    return x >= 0 && x < width && y >= 0 && y < height;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const { gx, gy } = gradientAt(x, y);
      const angle = (Math.atan2(gy, gx) * 180) / Math.PI;
      let sector: number;

      if (
        (angle >= -22.5 && angle <= 22.5) ||
        angle > 157.5 ||
        angle < -157.5
      ) {
        sector = 0; // Horizontal
      } else if (
        (angle > 22.5 && angle <= 67.5) ||
        (angle < -112.5 && angle >= -157.5)
      ) {
        sector = 1; // Diagonal (top-left to bottom-right)
      } else if (
        (angle > 67.5 && angle <= 112.5) ||
        (angle < -67.5 && angle >= -112.5)
      ) {
        sector = 2; // Vertical
      } else {
        sector = 3; // Diagonal (top-right to bottom-left)
      }

      const edgeStrength = L2gradient
        ? Math.sqrt(gx * gx + gy * gy)
        : Math.abs(gx) + Math.abs(gy);

      let isLocalMax = true;
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

      for (let i = sector; i < sector + 2; i++) {
        const [nx, ny] = neighbors[i];
        if (inBounds(nx, ny)) {
          const { gx: ngx, gy: ngy } = gradientAt(nx, ny);
          const neighborStrength = L2gradient
            ? Math.sqrt(ngx * ngx + ngy * ngy)
            : Math.abs(ngx) + Math.abs(ngy);
          if (neighborStrength >= edgeStrength) {
            isLocalMax = false;
            break;
          }
        }
      }

      suppressedData[y * width + x] = isLocalMax ? edgeStrength : 0;
    }
  }

  return {
    width,
    height,
    data: suppressedData,
  };
}
