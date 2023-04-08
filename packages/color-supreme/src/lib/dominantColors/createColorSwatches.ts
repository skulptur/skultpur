import { ImageBuffer } from 'pixel-paradise'
import { RGBColor } from './types'

export function createColorSwatches(
  swatches: RGBColor[],
  swatchSize: number = 50,
  swatchesPerRow?: number
): ImageBuffer {
  const columns = swatchesPerRow ?? swatches.length
  const width = columns * swatchSize
  const height = Math.ceil(swatches.length / columns) * swatchSize
  const ImageBuffer = new Uint8ClampedArray(width * height * 4)

  for (let i = 0; i < swatches.length; i++) {
    const color = swatches[i]

    const row = Math.floor(i / columns)
    const col = i % columns

    const startX = col * swatchSize
    const startY = row * swatchSize

    for (let y = startY; y < startY + swatchSize; y++) {
      for (let x = startX; x < startX + swatchSize; x++) {
        // TODO: don't use 4 channels?
        const index = (y * width + x) * 4
        ImageBuffer[index] = color[0] // R
        ImageBuffer[index + 1] = color[1] // G
        ImageBuffer[index + 2] = color[2] // B
        ImageBuffer[index + 3] = 255 // A
      }
    }
  }

  return {
    data: ImageBuffer,
    width,
    height,
  }
}
