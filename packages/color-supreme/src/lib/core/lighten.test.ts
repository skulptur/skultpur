import { RgbColor } from './types'
import { lighten } from './lighten'

describe('lighten', () => {
  it('should lighten the color by the specified factor', () => {
    const color: RgbColor = { red: 128, green: 128, blue: 128 }
    const factor = 0.5
    const expected: RgbColor = { red: 192, green: 192, blue: 192 }

    expect(lighten(color, factor)).toEqual(expected)
  })
})
