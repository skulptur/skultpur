import sharp from 'sharp'
import { ImageData } from 'pixel-paradise'

export async function saveImageAsPng(
  { buffer, width, height }: ImageData,
  channels: 1 | 2 | 3 | 4,
  outputPath: string
) {
  try {
    // Create a sharp instance with the raw image data and provided metadata
    const image = sharp(Buffer.from(buffer), {
      raw: {
        width,
        height,
        channels: channels,
      },
    })
    // console.log('success', outputPath)
    // Save the image as a PNG
    return await image.png().toFile(outputPath)
  } catch (err) {
    // console.log('error', outputPath)
    return err
  }
}

export const loadImage = async (imagePath: string): Promise<ImageData> => {
  const { data, info } = await sharp(imagePath)
    .toColourspace('srgb')
    .raw()
    .toBuffer({ resolveWithObject: true })

  return {
    buffer: data,
    width: info.width,
    height: info.height,
  }
}
