export const createCanvas = (container?: HTMLElement) => {
  const canvas = document.createElement("canvas");
  container && container.appendChild(canvas);
  return canvas;
};

/**
 * Performant way to clear all canvas data.
 * http://simonsarris.com/blog/346-how-you-clear-your-canvas-matters
 */
export const clearCanvas = (context: CanvasRenderingContext2D) => {
  const canvas = context.canvas;
  const width = canvas.width;
  const height = canvas.height;

  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, width, height);
  context.restore();
};

export const getContextScale = (context: CanvasRenderingContext2D) => {
  const transform = context.getTransform();
  return [transform.a, transform.d];
};

export const setContextScale = (
  scaleX: number,
  scaleY: number,
  context: CanvasRenderingContext2D
) => {
  const { b, c, e, f } = context.getTransform();
  context.setTransform(scaleX, b, c, scaleY, e, f);
};

export const setCanvasSize = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  pixelRatio: number
) => {
  const canvas = context.canvas;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  context.scale(pixelRatio, pixelRatio);
};

export const setImageSmoothing = (
  context: CanvasRenderingContext2D,
  smooth: boolean
) => {
  context.imageSmoothingEnabled = smooth;
};
