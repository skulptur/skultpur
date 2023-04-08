import sharp from 'sharp'
import { getDominantColors } from 'color-supreme'

export const getColors = async (imagePath: string, colors = 5) => {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true })

  const image = {
    data,
    width: info.width,
    height: info.height,
  }

  return getDominantColors(image, colors)
}

// getColors("your image path").then(console.log);
