import { randomCmyk } from './randomCmyk'

test('generates random cmyk color', () => {
  expect(randomCmyk()).toMatchObject({
    cyan: expect.any(Number),
    magenta: expect.any(Number),
    yellow: expect.any(Number),
    key: expect.any(Number),
  })
})
