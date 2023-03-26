import { ChannelCount, BufferWithInfo } from './types'

export function getImageChannelCount({
  buffer,
  width,
  height,
}: BufferWithInfo): ChannelCount | null {
  const totalPixels = width * height
  const totalValues = buffer.length

  const channelCount = totalValues / totalPixels

  if (channelCount >= 1 && channelCount <= 4) {
    return channelCount as ChannelCount
  } else {
    // Return a default value (e.g., 0) when the channel count is outside the valid range.
    return null
  }
}
