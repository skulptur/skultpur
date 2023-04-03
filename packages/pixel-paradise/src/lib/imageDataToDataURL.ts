import { ImageBuffer } from "./types";

// TODO: use native ImageData type? does that work in node?
// TODO: use other utils to create and remove canvas
export function imageDataToDataURL(imageData: ImageBuffer): string {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const imageDataCopy = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );
  context.putImageData(imageDataCopy, 0, 0);
  const dataURL = canvas.toDataURL();
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 0;
  canvas.height = 0;
  return dataURL;
}
