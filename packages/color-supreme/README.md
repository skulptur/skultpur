<!-- infuser start title -->  
# color-supreme  
<!-- infuser end title -->
<!-- infuser start description -->  
A powerful library for extracting dominant colors from images. It uses the k-means clustering algorithm to analyze the colors in an image and identify the most dominant ones, making it ideal for a range of applications such as image processing, data visualization, and search algorithms.  
<!-- infuser end description -->

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add color-supreme  
```  
NPM  
```bash  
npm install color-supreme --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->  
## Use  
Browser  
```typescript  
import { getDominantColors } from 'color-supreme'
import { getImageFromUrl } from 'pixel-paradise'

export const getColors = async (url: string, colors = 5) => {
  const pixels = await getImageFromUrl(url)
  return getDominantColors(pixels, colors)
}

// getColors('your image url').then(console.log)
  
```  
Node  
```typescript  
import sharp from 'sharp'
import { getDominantColors } from 'color-supreme'

export const getColors = async (imagePath: string, colors = 5) => {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true })

  const image = {
    data,
    width: info.width,
    height: info.height,
  }

  return getDominantColors(image, colors)
}

// getColors("your image path").then(console.log);
  
```  
<!-- infuser end usage -->

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start footer -->  
## Notice  
This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  
<!-- infuser end footer -->
