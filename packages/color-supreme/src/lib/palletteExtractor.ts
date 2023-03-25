type RGBColor = [number, number, number]

const calculateColorDifference = (color1: RGBColor, color2: RGBColor): number => {
  const rDifference = Math.pow(color2[0] - color1[0], 2)
  const gDifference = Math.pow(color2[1] - color1[1], 2)
  const bDifference = Math.pow(color2[2] - color1[2], 2)

  return rDifference + gDifference + bDifference
}

const findBiggestColorRange = (rgbValues: RGBColor[]): number => {
  let rMin = Number.MAX_VALUE
  let gMin = Number.MAX_VALUE
  let bMin = Number.MAX_VALUE

  let rMax = Number.MIN_VALUE
  let gMax = Number.MIN_VALUE
  let bMax = Number.MIN_VALUE

  // TODO: don't use forEach for perf reasons
  rgbValues.forEach((pixel) => {
    rMin = Math.min(rMin, pixel[0])
    gMin = Math.min(gMin, pixel[1])
    bMin = Math.min(bMin, pixel[2])

    rMax = Math.max(rMax, pixel[0])
    gMax = Math.max(gMax, pixel[1])
    bMax = Math.max(bMax, pixel[2])
  })

  const rRange = rMax - rMin
  const gRange = gMax - gMin
  const bRange = bMax - bMin

  const biggestRange = Math.max(rRange, gRange, bRange)
  if (biggestRange === rRange) {
    return 0
  } else if (biggestRange === gRange) {
    return 1
  } else {
    return 2
  }
}

export const quantization = (
  rgbValues: RGBColor[],
  maxDepth: number = 4,
  depth: number = 0
): RGBColor[] => {
  if (depth === maxDepth || rgbValues.length === 0) {
    const color = rgbValues.reduce(
      (prev, curr) => {
        prev[0] += curr[0]
        prev[1] += curr[1]
        prev[2] += curr[2]

        return prev
      },
      [0, 0, 0]
    )

    color[0] = Math.round(color[0] / rgbValues.length)
    color[1] = Math.round(color[1] / rgbValues.length)
    color[2] = Math.round(color[2] / rgbValues.length)

    return [color]
  }

  const componentToSortBy = findBiggestColorRange(rgbValues)
  rgbValues.sort((p1, p2) => {
    return p1[componentToSortBy] - p2[componentToSortBy]
  })

  const mid = rgbValues.length / 2
  return [
    ...quantization(rgbValues.slice(0, mid), maxDepth, depth + 1),
    ...quantization(rgbValues.slice(mid + 1), maxDepth, depth + 1),
  ]
}
