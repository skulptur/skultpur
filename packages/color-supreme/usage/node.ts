import sharp from "sharp";
import { getDominantColors, rgbToHex } from "color-supreme";

export const getColors = async (imagePath: string, colors = 5) => {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bufferWithInfo = {
    buffer: data,
    width: info.width,
    height: info.height,
  };

  return getDominantColors(bufferWithInfo, colors).map(rgbToHex);
};

// getColors("your image path").then(console.log);
