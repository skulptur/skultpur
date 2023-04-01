<!-- infuser start title -->  
# asset-preloader  
<!-- infuser end title -->
<!-- infuser start description -->  
A tiny asset preloader for the browser via XHR2. It can preload assets of different file types and composite progress together, with support for multiple event subscriptions.  
<!-- infuser end description -->

## Get started

Install

```bash
yarn add asset-preloader
# or
npm install --save asset-preloader
```

Use

```typescript
import { createPreloader } from 'asset-preloader'

const preloader = createPreloader()

const urls = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
]

urls.forEach((url) => preloader.load(url))

preloader.start()

// event subscriptions
preloader.onComplete((assets) => {
  console.log('completed', assets)
})

preloader.onProgress((event) => {
  console.log(Math.round(event.progress * 100) + '%')
})

preloader.onFetched((assets) => {
  console.log('fetched', assets)
})

preloader.onError((assets) => {
  console.log('error', assets)
})
```

## Canceling

The asset preloader can be canceled at any time during loading. When calling `preload.cancel()` all assets already preloaded will be available for use, but the download of pending assets will be abandoned and `status` will be set to `0`.

```typescript
preload.onCancel((items) => {
  console.log(items)
})

preload.cancel()
```

<!-- infuser start footer -->  
## Notice  
This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  
<!-- infuser end footer -->
