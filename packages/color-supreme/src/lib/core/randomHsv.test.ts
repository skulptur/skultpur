import { randomHsv } from './randomHsv'

test('generates random hex', () => {
  expect(randomHsv()).toMatchObject({
    hue: expect.any(Number),
    sat: expect.any(Number),
    val: expect.any(Number),
  })
})
