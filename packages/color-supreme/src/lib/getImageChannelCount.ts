import { ChannelCount } from './types'

export function getImageChannelCount(
  imageData: Uint8ClampedArray,
  width: number,
  height: number
): ChannelCount | null {
  const totalPixels = width * height
  const totalValues = imageData.length

  const channelCount = totalValues / totalPixels

  if (channelCount >= 1 && channelCount <= 4) {
    return channelCount as ChannelCount
  } else {
    // Return a default value (e.g., 0) when the channel count is outside the valid range.
    return null
  }
}
