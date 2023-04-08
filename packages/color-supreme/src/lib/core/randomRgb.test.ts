import { randomRgb } from './randomRgb'

test('generates random hex', () => {
  expect(randomRgb()).toMatchObject({
    red: expect.any(Number),
    green: expect.any(Number),
    blue: expect.any(Number),
  })
})
