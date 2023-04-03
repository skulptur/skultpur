function findSymmetryAxisPositionCenterOfGravity(
  imageData: ImageBuffer,
  axisDirection: number
): number {
  // Compute the center of gravity of the image along the symmetry axis
  const weights: number[] = [];
  const sums: number[] = [];
  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      const pixelIndex = (y * imageData.width + x) * 4;
      const gradientAngle = Math.atan2(
        imageData.data[pixelIndex + 1], // Green channel is the y component of the gradient
        imageData.data[pixelIndex] // Red channel is the x component of the gradient
      );
      const distance = Math.abs(gradientAngle - axisDirection);
      const weight = Math.cos(distance);
      weights.push(weight);
      sums.push(weight * x);
    }
  }
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const centerX = sums.reduce((a, b) => a + b, 0) / totalWeight;

  return centerX;
}

import { ImageBuffer } from "./types";

import { detectEdges, getChannelCount } from "..";

/**
 * Computes a histogram of gradient orientations for the given orientation image data.
 * @param orientation The orientation image data.
 * @param numBins The number of bins in the histogram.
 * @returns An array of length numBins containing the histogram.
 */
export function getGradientOrientationHistogram(
  orientation: ImageBuffer,
  numBins: number
): number[] {
  const { width, height, data } = orientation;
  const channelCount = getChannelCount(orientation);
  const histogram = new Array(numBins).fill(0); // Initialize histogram with zeros
  const pixelCount = width * height;

  for (let i = 0; i < pixelCount; i++) {
    const angle = (data[i * channelCount] / 255) * 2 * Math.PI; // Scale angle value to [0, 2π)
    const binIndex = Math.floor((angle / (2 * Math.PI)) * numBins) % numBins;
    histogram[binIndex] += 1;
  }

  return histogram;
}

function calculateGradient({ data, width, height }: ImageBuffer) {
  const magnitudeData = new Uint8ClampedArray(data.length);
  const orientationData = new Uint8ClampedArray(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const gx = data[i]; // Assuming Gx is in the Red channel
    const gy = data[i + 1]; // Assuming Gy is in the Green channel

    const mag = Math.sqrt(gx * gx + gy * gy);
    const ori = (Math.atan2(gy, gx) * 180) / Math.PI;
    const angle = ori < 0 ? ori + 360 : ori;

    magnitudeData[i] = magnitudeData[i + 1] = magnitudeData[i + 2] = mag;
    magnitudeData[i + 3] = 255;

    orientationData[i] = orientationData[i + 1] = orientationData[
      i + 2
    ] = angle;
    orientationData[i + 3] = 255;
  }

  const magnitude: ImageBuffer = {
    data: magnitudeData,
    width,
    height,
  };

  const orientation: ImageBuffer = {
    data: orientationData,
    width,
    height,
  };

  return { magnitude, orientation };
}

export function findSymmetryAxisDirection(gradientHistogram: number[]): number {
  // Find the index of the peak(s) in the gradient orientation histogram
  const peaks: number[] = [];
  for (let i = 0; i < gradientHistogram.length; i++) {
    const prev =
      gradientHistogram[
        (i - 1 + gradientHistogram.length) % gradientHistogram.length
      ];
    const curr = gradientHistogram[i];
    const next = gradientHistogram[(i + 1) % gradientHistogram.length];
    if (curr > prev && curr > next) {
      peaks.push(i);
    }
  }

  // If there are no peaks, return -1
  if (peaks.length === 0) {
    return -1;
  }

  // If there is only one peak, return its index
  if (peaks.length === 1) {
    return peaks[0];
  }

  // If there are multiple peaks, return the average of their indices
  return peaks.reduce((a, b) => a + b, 0) / peaks.length;
}

function findSymmetryAxisPositionProjectionProfile(
  gradient: ImageBuffer,
  axisDirection: number,
  magnitude: ImageBuffer // Replace Float32Array[] with ImageData
): number {
  // Compute the projection profile of the image along the symmetry axis
  const projection: number[] = [];
  const width = gradient.width;
  const height = gradient.height;

  for (let x = 0; x < width; x++) {
    let sum = 0;
    for (let y = 0; y < height; y++) {
      const index = (width * y + x) * 4;

      const gradientX = gradient.data[index];
      const gradientY = gradient.data[index + 1];
      const gradientAngle = Math.atan2(gradientY, gradientX);
      const distance = Math.abs(gradientAngle - axisDirection);
      const weight = Math.cos(distance);
      sum += weight * magnitude.data[index]; // Use the gradient magnitude from ImageData
    }
    projection.push(sum);
  }

  // Find the maximum value in the projection profile
  const maxIndex = projection.indexOf(Math.max(...projection));

  return maxIndex;
}

function histogramIndexToAngle(index: number, numBins: number): number {
  const binSize = 360 / numBins;
  return index * binSize;
}

function nonMaximumSuppression(histogram: number[], radius: number): number[] {
  const suppressed = new Array(histogram.length).fill(0);
  for (let i = 0; i < histogram.length; i++) {
    let isMax = true;
    for (let j = -radius; j <= radius; j++) {
      if (
        histogram[i] < histogram[(i + j + histogram.length) % histogram.length]
      ) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      suppressed[i] = histogram[i];
    }
  }
  return suppressed;
}

export function computeSymmetryScore(
  imageData: ImageBuffer,
  position: number,
  angle: number,
  magnitude: Float32Array[], // Add the magnitude as a parameter
  threshold: number = 10 // Add a threshold parameter
): number {
  const angleRadians = (angle * Math.PI) / 180;
  const cos = Math.cos(angleRadians);
  const sin = Math.sin(angleRadians);

  const { width, height, data: buffer } = imageData;
  const leftSum = new Float32Array(height);
  const rightSum = new Float32Array(height);
  const centerX = width / 2;
  const centerY = height / 2;

  // Compute the sum of the absolute pixel values of the left and right halves
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (magnitude[y][x] < threshold) continue; // Apply the threshold to the gradient magnitude
      const index = (y * width + x) * 4;
      const xRel = x - centerX;
      const yRel = y - centerY;
      const xRot = xRel * cos + yRel * sin;
      const yRot = -xRel * sin + yRel * cos;
      const xSym = position + (position - xRot);
      // const ySym = yRot;

      if (x < position) {
        leftSum[y] += Math.abs(
          buffer[index] - buffer[(y * width + Math.round(xSym)) * 4]
        );
      } else {
        rightSum[y] += Math.abs(
          buffer[index] - buffer[(y * width + Math.round(xSym)) * 4]
        );
      }
    }
  }

  // Compute the average symmetry score
  let score = 0;
  for (let y = 0; y < height; y++) {
    const denominator = leftSum[y] + rightSum[y] + Number.EPSILON; // Add a small constant value to avoid division by zero
    score += 1 - Math.abs(leftSum[y] - rightSum[y]) / denominator;
  }
  return score / height;
}

function findMultipleSymmetryAxisDirections(
  gradientHistogram: number[],
  n: number,
  suppressionRadius: number = 2 // Add a suppression radius parameter
): number[] {
  const suppressedHistogram = nonMaximumSuppression(
    gradientHistogram,
    suppressionRadius
  );
  const indices = [...Array(suppressedHistogram.length).keys()];
  indices.sort((a, b) => suppressedHistogram[b] - suppressedHistogram[a]);

  return indices.slice(0, n);
}

/**
 * Detects symmetry in an image by calculating the gradient, computing a histogram of gradient orientations,
 * and detecting the symmetry axis and position. This function does not compute the symmetry score but returns
 * the necessary values so that the symmetry score can be calculated later if needed.
 *
 * @param {ImageBuffer} imageData - The image data to analyze.
 * @param {number} n - The number of symmetry axes to detect.
 * @param {number} [bins=36] - The number of bins for the gradient orientation histogram.
 * @param {number} [threshold=10] - The threshold for the gradient magnitude.
 * @returns {Array<{ position: number; angle: number; magnitude: Float32Array[]; threshold: number }>} - An array of objects containing the position, angle, magnitude, and threshold of the detected symmetry axes.
 */
export function detectSymmetry(imageData: ImageBuffer, n: number, bins = 36) {
  // Apply the Sobel operator to the input image
  const sobelImageData = detectEdges(imageData);
  const { magnitude, orientation } = calculateGradient(sobelImageData);
  const gradientHistogram = getGradientOrientationHistogram(orientation, bins);
  const axisDirections = findMultipleSymmetryAxisDirections(
    gradientHistogram,
    n
  );

  console.log({ gradientHistogram });
  const symmetries = axisDirections.map((axisDirection) => {
    const angle = histogramIndexToAngle(axisDirection, bins);
    const axisPosition = findSymmetryAxisPositionProjectionProfile(
      imageData,
      axisDirection,
      magnitude
    );

    return { position: axisPosition, angle };
  });

  return {
    sobel: sobelImageData,
    magnitude,
    orientation,
    gradientHistogram,
    symmetries,
  };
}

// TODO:
// The result you obtained means that the direction of the symmetry axis is 18, and its position is 421.13 pixels along the x-axis (assuming the origin is at the top-left corner of the image).
// To analyze the result, you can use the following guidelines:
// Direction of the symmetry axis: The direction of the symmetry axis is expressed as an index into the gradient orientation histogram, which has a fixed number of bins (e.g., 36). To convert the index to an angle in degrees, you can multiply it by the bin size (e.g., 10 degrees if there are 36 bins), or use a lookup table if you have defined one.
// Position of the symmetry axis: The position of the symmetry axis is expressed in pixels along the x-axis (assuming the origin is at the top-left corner of the image). To interpret this value, you need to know the scale of the image, which depends on the resolution and the physical size of the image. For example, if the image has a resolution of 300 pixels per inch and a physical size of 4 inches by 6 inches, then the scale is 300/1.5 = 200 pixels per inch (assuming a display size of 1.5x). In this case, the position of the symmetry axis of 421.13 pixels corresponds to a physical distance of 421.13/200 = 2.1 inches.
// Validity of the result: To assess the validity of the result, you can visually inspect the image and compare it to the expected symmetry pattern. You can also try different methods for finding the symmetry axis (e.g., center of gravity vs. projection profile) and see if they give consistent results. Additionally, you can test the robustness of the algorithm to variations in the image (e.g., noise, rotation, scaling) and see if it still produces accurate results. Finally, you can compare the results to those obtained by other symmetry detection algorithms and evaluate their agreement.
