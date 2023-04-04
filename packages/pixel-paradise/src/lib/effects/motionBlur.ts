import { ImageBuffer } from "../core/types";

interface VectorBlurOptions {
  blurStrength: number;
  redMultiplier: number;
  greenMultiplier: number;
  numSamples: number;
}

const defaultVectorBlurOptions: VectorBlurOptions = {
  blurStrength: 10,
  redMultiplier: 1,
  greenMultiplier: 1,
  numSamples: 5,
};

export function motionBlur(
  imageBuffer: ImageBuffer,
  options: Partial<VectorBlurOptions> = {}
): ImageBuffer {
  const { width, height, data } = imageBuffer;
  const outputData = new Uint8ClampedArray(width * height * 4);
  const { blurStrength, redMultiplier, greenMultiplier, numSamples } = {
    ...defaultVectorBlurOptions,
    ...options,
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;

      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let aSum = 0;

      for (let s = 0; s < numSamples; s++) {
        const t = (s - (numSamples - 1) / 2) / (numSamples - 1);

        const directionX =
          ((data[i] * redMultiplier) / 255 - 0.5) * 2 * blurStrength * t;
        const directionY =
          ((data[i + 1] * greenMultiplier) / 255 - 0.5) * 2 * blurStrength * t;

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
      outputData[i + 3] = aSum / numSamples;
    }
  }

  return {
    width,
    height,
    data: outputData,
  };
}
