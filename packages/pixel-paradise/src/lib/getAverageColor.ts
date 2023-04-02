import { getImageChannelCount } from "./getImageChannelCount.js";
import { BufferWithInfo } from "./types.js";

export function getAverageColor(
  bufferWithInfo: BufferWithInfo,
  x: number,
  y: number,
  size: number
): number[] {
  const { buffer, width, height } = bufferWithInfo;
  const channels = getImageChannelCount(bufferWithInfo) || 0;
  const averageColor = new Array(channels).fill(0);
  let count = 0;

  for (let i = y; i < y + size && i < height; i++) {
    for (let j = x; j < x + size && j < width; j++) {
      const idx = (i * width + j) * channels;
      for (let c = 0; c < channels; c++) {
        averageColor[c] += buffer[idx + c];
      }
      count++;
    }
  }

  return averageColor.map((val) => val / count);
}
