import { nearestNeighbor } from "./samplingMethods.js";
import { scale } from "./scale.js";
import { BufferWithInfo } from "./types.js";

describe("scaleImage", () => {
  const channels = 3;
  const imageData: BufferWithInfo = {
    buffer: new Uint8ClampedArray([
      255,
      0,
      0,
      0,
      255,
      0,
      0,
      0,
      255,
      255,
      255,
      0,
      0,
      255,
      255,
      0,
      0,
      255,
      255,
      0,
      255,
      0,
      255,
      255,
      255,
      0,
      0,
    ]),
    width: 3,
    height: 3,
  };

  test("increase size", () => {
    const newWidth = 6;
    const newHeight = 6;
    const expectedScaledImageData = {
      buffer: new Uint8ClampedArray([]),
      width: newWidth,
      height: newHeight,
    };

    const scaledImageData = scale(
      imageData,
      newWidth,
      newHeight,
      nearestNeighbor
    );

    // TODO: it seems that it is having an incorrect behavior when increasing the size
    expect(scaledImageData).toEqual(expectedScaledImageData);
  });

  test("empty input image", () => {
    const newWidth = 6;
    const newHeight = 6;
    const emptyImageData: BufferWithInfo = {
      buffer: new Uint8ClampedArray(0),
      width: newWidth,
      height: newHeight,
    };
    const emptyScaledImageData = new Uint8ClampedArray(
      newWidth * newHeight * channels
    );

    const scaledImageData = scale(
      emptyImageData,
      newWidth,
      newHeight,
      nearestNeighbor
    );

    // TODO: it seems that it is having an incorrect behavior when increasing the size from an empty image
    expect(scaledImageData).toEqual(emptyScaledImageData);
  });

  test("input and output image are of the same size", () => {
    const newWidth = imageData.width;
    const newHeight = imageData.height;

    const scaledImageData = scale(
      imageData,
      newWidth,
      newHeight,
      nearestNeighbor
    );

    expect(scaledImageData).toEqual(imageData);
  });

  test("scaling to an image with width or height equal to 0", () => {
    const newWidth = 0;
    const newHeight = 0;
    const expectedScaledImageData = {
      buffer: new Uint8ClampedArray(0),
      width: newWidth,
      height: newHeight,
    };

    const scaledImageData = scale(
      imageData,
      newWidth,
      newHeight,
      nearestNeighbor
    );

    expect(scaledImageData).toEqual(expectedScaledImageData);
  });

  test("scaling to a 1x1 image", () => {
    const newWidth = 1;
    const newHeight = 1;
    const expectedScaledImageData = {
      buffer: new Uint8ClampedArray([255, 0, 0]),
      width: newWidth,
      height: newHeight,
    };

    const scaledImageData = scale(
      imageData,
      newWidth,
      newHeight,
      nearestNeighbor
    );

    expect(scaledImageData).toEqual(expectedScaledImageData);
  });

  test("scaling down the image", () => {
    const newWidth = 2;
    const newHeight = 2;
    const expectedScaledImageData = {
      buffer: new Uint8ClampedArray([
        255,
        0,
        0,
        0,
        0,
        255,
        255,
        0,
        255,
        255,
        0,
        0,
      ]),
      width: newWidth,
      height: newHeight,
    };

    const scaledImageData = scale(
      imageData,
      newWidth,
      newHeight,
      nearestNeighbor
    );

    expect(scaledImageData).toEqual(expectedScaledImageData);
  });
});
