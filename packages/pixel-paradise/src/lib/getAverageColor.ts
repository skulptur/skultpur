import { getChannelCount } from "./getChannelCount.js";
import { ImageBuffer } from "./types.js";

export function getAverageColor(
  ImageData: ImageBuffer,
  x: number,
  y: number,
  size: number
): number[] {
  const { data: buffer, width, height } = ImageData;
  const channels = getChannelCount(ImageData) || 0;
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
