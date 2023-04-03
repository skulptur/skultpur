import { ImageBuffer } from "../types";

interface VectorBlurOptions {
  blurStrength: number;
  numSamples: number;
  brightnessMultiplier: number;
  preserveAlpha: boolean;
}

const defaultVectorBlurOptions: VectorBlurOptions = {
  blurStrength: 10,
  numSamples: 5,
  brightnessMultiplier: 1,
  preserveAlpha: false,
};

export function vectorBlur(
  imageBuffer: ImageBuffer,
  options: Partial<VectorBlurOptions> = {}
): ImageBuffer {
  const { width, height, data } = imageBuffer;
  const outputData = new Uint8ClampedArray(width * height * 4);
  const { blurStrength, numSamples, brightnessMultiplier, preserveAlpha } = {
    ...defaultVectorBlurOptions,
    ...options,
  };

  function getBrightness(i: number): number {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    return (r + g + b) / 3;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;

      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let aSum = 0;

      const brightness = getBrightness(i) * brightnessMultiplier;

      for (let s = 0; s < numSamples; s++) {
        const t = (s - (numSamples - 1) / 2) / (numSamples - 1);

        const directionX = brightness * blurStrength * t;
        const directionY = brightness * blurStrength * t;

        const newX = Math.round(x + directionX);
        const newY = Math.round(y + directionY);

        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
          const newI = (newY * width + newX) * 4;

          rSum += data[newI];
          gSum += data[newI + 1];
          bSum += data[newI + 2];
          aSum += data[newI + 3];
        }
      }

      outputData[i] = rSum / numSamples;
      outputData[i + 1] = gSum / numSamples;
      outputData[i + 2] = bSum / numSamples;

      outputData[i + 3] = preserveAlpha ? data[i + 3] : aSum / numSamples;
    }
  }

  return {
    width,
    height,
    data: outputData,
  };
}
