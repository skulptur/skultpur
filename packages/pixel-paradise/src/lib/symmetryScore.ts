import { getAverageColor } from "./getAverageColor";
import { getImageChannelCount } from "./getImageChannelCount";
import { BufferWithInfo } from "./types";

function colorDistance(color1: number[], color2: number[]): number {
  let sum = 0;
  for (let i = 0; i < color1.length; i++) {
    sum += (color1[i] - color2[i]) ** 2;
  }
  return Math.sqrt(sum);
}

function calculateSymmetryScore(
  bufferWithInfo: BufferWithInfo,
  blockSize: number,
  isHorizontal: boolean
): number {
  let score = 0;
  let count = 0;
  const { width, height } = bufferWithInfo;
  const channels = getImageChannelCount(bufferWithInfo) || 0;
  const limit1 = isHorizontal ? height : width;
  const limit2 = (isHorizontal ? width : height) / 2;

  for (let i = 0; i < limit1; i += blockSize) {
    for (let j = 0; j < limit2; j += blockSize) {
      const x1 = isHorizontal ? j : i;
      const y1 = isHorizontal ? i : j;
      const x2 = isHorizontal ? width - j - blockSize : i;
      const y2 = isHorizontal ? i : height - j - blockSize;

      const color1 = getAverageColor(bufferWithInfo, x1, y1, blockSize);
      const color2 = getAverageColor(bufferWithInfo, x2, y2, blockSize);

      score += 1 - colorDistance(color1, color2) / (255 * Math.sqrt(channels));
      count++;
    }
  }

  return score / count;
}

export function calculateSymmetry(
  bufferWithInfo: BufferWithInfo,
  blockSize: number = 8
) {
  const horizontalScore = calculateSymmetryScore(
    bufferWithInfo,
    blockSize,
    true
  );
  const verticalScore = calculateSymmetryScore(
    bufferWithInfo,
    blockSize,
    false
  );

  return {
    horizontal: horizontalScore,
    vertical: verticalScore,
  };
}
