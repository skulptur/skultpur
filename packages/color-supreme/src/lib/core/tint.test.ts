import { tint } from './tint'

describe('tint', () => {
  it('should return the first color if ratio is 0', () => {
    const color1 = { red: 255, green: 0, blue: 0 }
    const color2 = { red: 0, green: 255, blue: 0 }
    const ratio = 0
    expect(tint(color1, color2, ratio)).toEqual(color1)
  })

  it('should return the second color if ratio is 1', () => {
    const color1 = { red: 255, green: 0, blue: 0 }
    const color2 = { red: 0, green: 255, blue: 0 }
    const ratio = 1
    expect(tint(color1, color2, ratio)).toEqual(color2)
  })

  it('should return a mix of the two colors if ratio is between 0 and 1', () => {
    const color1 = { red: 255, green: 0, blue: 0 }
    const color2 = { red: 0, green: 255, blue: 0 }
    const ratio = 0.5
    const expected = { red: 128, green: 128, blue: 0 }
    expect(tint(color1, color2, ratio)).toEqual(expected)
  })

  it('should return black if both colors are black', () => {
    const color1 = { red: 0, green: 0, blue: 0 }
    const color2 = { red: 0, green: 0, blue: 0 }
    const ratio = 0.5
    const expected = { red: 0, green: 0, blue: 0 }
    expect(tint(color1, color2, ratio)).toEqual(expected)
  })

  it('should return white if both colors are white', () => {
    const color1 = { red: 255, green: 255, blue: 255 }
    const color2 = { red: 255, green: 255, blue: 255 }
    const ratio = 0.5
    const expected = { red: 255, green: 255, blue: 255 }
    expect(tint(color1, color2, ratio)).toEqual(expected)
  })
})
