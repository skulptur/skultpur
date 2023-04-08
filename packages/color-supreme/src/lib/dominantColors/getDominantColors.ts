import { kmeans, Options as KMeansOptions } from 'ml-kmeans'
import { scaleToMaxSize, ImageBuffer } from 'pixel-paradise'
import { RGBColor } from './types'
import { bufferToPixels } from './bufferToPixels'
import { rgbToHex } from './rgbToHex'

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

export function getDominantColors(
  imageBuffer: ImageBuffer,
  numberOfColors: number,
  options: getDominantColorsOptions = {}
) {
  const resizedImage = scaleToMaxSize(imageBuffer, options.maxSize || Infinity, 30)

  const pixels = bufferToPixels(resizedImage).pixels

  if (pixels.length === 0) {
    throw new Error('Image has invalid size')
  }

  const _numberOfColors = Math.min(pixels.length, numberOfColors)
  const kMeansResult = kmeans(pixels, _numberOfColors, {
    seed: 1,
    initialization: 'kmeans++',
    ...(options.kmeans || {}),
  })

  // Compute cluster sizes
  const clusterSizes = new Array(kMeansResult.centroids.length).fill(0)
  kMeansResult.clusters.forEach((clusterIndex) => {
    clusterSizes[clusterIndex]++
  })

  // Sort the indices of the centroids by cluster size in descending order (most dominant to least dominant)
  const sortedCentroidIndices = kMeansResult.centroids
    .map((_, i) => i)
    .sort((a, b) => {
      return clusterSizes[b] - clusterSizes[a]
    })

  const sortedCentroids = sortedCentroidIndices.map((index) => kMeansResult.centroids[index])
  const sortedClusterSizes = sortedCentroidIndices.map((index) => clusterSizes[index])

  const rgbColors = sortedCentroids.map((centroid) => {
    return [Math.round(centroid[0]), Math.round(centroid[1]), Math.round(centroid[2])] as RGBColor
  })

  const hexColors = rgbColors.map(rgbToHex)

  return {
    converged: kMeansResult.converged,
    iterations: kMeansResult.iterations,
    clusterSizes: sortedClusterSizes,
    rgb: rgbColors,
    hex: hexColors,
  }
}
