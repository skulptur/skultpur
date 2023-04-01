import { getDominantColors, rgbToHex } from "color-supreme";
import { getImageFromUrl } from "pixel-paradise";

export const getColors = async (url: string, colors = 5) => {
  const pixels = await getImageFromUrl(url);
  return getDominantColors(pixels, colors).map(rgbToHex);
};
// getColors('your image url').then(console.log)
