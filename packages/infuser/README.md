<!-- infuser start title -->  
# infuser  
<!-- infuser end title -->
<!-- infuser start description -->  
If you're looking for an easy way to extract or update dynamic content within static files, this library has got you covered! With `getSlots`, you can quickly extract the content of slots or placeholders within your files. And with `updateSlots`, you can effortlessly replace the content of these slots with new content. Say goodbye to the hassle of manually updating static files with dynamic content. Let `infuser` do the heavy lifting for you and streamline your workflow like never before!  
<!-- infuser end description -->

<!-- infuser start installation -->  
## Installation  
Yarn  
```bash  
yarn add infuser  
```  
NPM  
```bash  
npm install infuser --save  
```  
<!-- infuser end installation -->

<!-- infuser start usage -->
<!-- infuser end usage -->

## Use

Node

```typescript
import { updateFile, SlotUpdate } from "infuser";

const filePath = "./example.html";
const updates: Array<SlotUpdate> = [
  {
    slotName: "header",
    newContent: "<h1>New header content</h1>",
  },
  {
    slotName: "footer",
    newContent: "<p>New footer content</p>",
  },
];

updateFile(filePath, updates)
  .then(() => {
    console.log("File successfully updated");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
```

### File structure

Infuser library uses special comments to identify slots in a file. Here's an example of how the file should look like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- infuser start my-header -->
    <h1>Original header content</h1>
    <!-- infuser end my-header -->

    <div>
      <p>Content not inside a slot remains unchanged.</p>
    </div>

    <!-- infuser start my-footer -->
    <p>Original footer content</p>
    <!-- infuser end my-footer -->
  </body>
</html>
```

In this example, there are two slots: header and footer. When the updateFile function is called, the content between &lt;!-- infuser start header --&gt; and &lt;!-- infuser end header --&gt;, and &lt;!-- infuser start footer --&gt; and &lt;!-- infuser end footer --&gt; will be replaced with the new content specified in the updates array.

Infuser supports some common file formats out of the box, and you can specify the comment style for files it does not recognize.

<!-- infuser start development -->
<!-- infuser end development -->

<!-- infuser start footer -->  
## Notice  
This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  
<!-- infuser end footer -->
