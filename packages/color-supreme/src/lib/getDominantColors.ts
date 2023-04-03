import { kmeans, Options as KMeansOptions } from 'ml-kmeans'
import { bufferToPixels, scaleToMaxSize, ImageData, RGBColor } from 'pixel-paradise'

export type SkMeansResult<TPoint extends number[]> = {
  it: number
  k: number
  centroids: TPoint[]
  idxs: number[]
  test: (x: TPoint, distance?: (x: TPoint, y: TPoint) => number) => void
}

export type getDominantColorsOptions = {
  kmeans?: KMeansOptions
  maxSize?: number
}

/**
 * Retrieves the dominant colors from a given set of pixels.
 *
 * @param {ImageData} imageBuffer - A 2D array representing the pixel colors as [R, G, B] tuples.
 * @param {number} numberOfColors - The number of dominant colors to extract.
 * @returns {RGBColor[]} An array of dominant colors represented as Color tuples.
 * Returns an empty array if the input pixels array is empty.
 */
export function getDominantColors(
  imageBuffer: ImageData,
  numberOfColors: number,
  options: getDominantColorsOptions = {}
): RGBColor[] {
  const resizedImage = scaleToMaxSize(imageBuffer, options.maxSize || 256, 30)

  const pixels = bufferToPixels(resizedImage).pixels

  // Return an empty array if the pixels array is empty
  if (pixels.length === 0) return []

  const _numberOfColors = Math.min(pixels.length, numberOfColors)
  const result = kmeans(pixels, _numberOfColors, {
    seed: 1,
    initialization: 'kmeans++',
    ...(options.kmeans || {}),
  })

  // Sort the centroids by cluster size in descending order (most dominant to least dominant)
  const sortedCentroids = result.centroids.sort((a, b) => {
    const sizeA = result.clusters.filter((c) => c === result.centroids.indexOf(a)).length
    const sizeB = result.clusters.filter((c) => c === result.centroids.indexOf(b)).length
    return sizeB - sizeA
  })

  return sortedCentroids.map((centroid) => {
    return [Math.round(centroid[0]), Math.round(centroid[1]), Math.round(centroid[2])] as RGBColor
  })
}
