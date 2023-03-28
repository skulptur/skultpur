## `color-supreme`

A powerful library for extracting dominant colors from images. It uses the k-means clustering algorithm to analyze the colors and identify the most dominant ones, making it ideal for a range of applications such as image processing, data visualization, and search algorithms.

## Get started

### Install

```bash
yarn add color-supreme
# or
npm install --save color-supreme
```

### Use

Browser

```typescript
import { getDominantColors, rgbToHex } from 'color-supreme'
import { getImageFromUrl } from 'pixel-paradise'

const getColors = async (url: string, colors = 5) => {
  const pixels = await getImageFromUrl(url)
  return getDominantColors(pixels, colors).map(rgbToHex)
}
getColors('your image url').then(console.log)
```

Node (example with sharp)

```typescript
import sharp from 'sharp'
import { getDominantColors, rgbToHex } from 'color-supreme'

const getColors = async (imagePath: string, colors = 5) => {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true })

  const bufferWithInfo = { buffer: data, width: info.width, height: info.height }

  return getDominantColors(bufferWithInfo, colors)
}

getColors('your image path').then(console.log)
```

---

## License

This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
