import React, { useState, useEffect, useRef } from "react";
import { PageLayout } from "../../../components/PageLayout";
import { testImages } from "../../../data/testImages";
import {
  getImageFromUrl,
  imageToDataUrl,
  detectSymmetry,
  canny,
  ImageBuffer,
} from "pixel-paradise";
import { Group } from "@mantine/core";

function drawSymmetries(
  imageData: ImageBuffer,
  lines: Array<[number, number]>
): ImageBuffer {
  const { width, height, data } = imageData;
  const outputData = new Uint8ClampedArray(data.length);
  outputData.set(data);

  lines.forEach(([rho, theta]) => {
    for (let x = 0; x < width; x++) {
      const y = Math.round((rho - x * Math.cos(theta)) / Math.sin(theta));
      if (y >= 0 && y < height) {
        const index = (y * width + x) * 4;
        outputData[index] = 255;
        outputData[index + 1] = 0;
        outputData[index + 2] = 0;
      }
    }
  });

  return { width, height, data: outputData };
}

type SobelProps = {
  imageUrl: string;
};
export function Sobel({ imageUrl }: SobelProps) {
  const [url, setUrl] = useState<string>();
  const [symmetryScore, setSymmetryScore] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    getImageFromUrl(imageUrl).then((image) => {
      // const analysis = detectSymmetry(image, 3);
      // console.log(analysis);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d")!;

      const edgeImage = canny(image);

      setUrl(
        imageToDataUrl(
          // analysis.sobel
          // analysis.orientation
          edgeImage
          // gradientToNormalMap(analysis.orientation, analysis.magnitude)
        )
      );

      // analysis.symmetries.map(({ position, angle }) => {
      //   ctx.strokeStyle = "red";
      //   ctx.lineWidth = 2;
      //   ctx.beginPath();
      //   const startX = position;
      //   const startY = 0;
      //   const endX =
      //     position + Math.sin(angle * (Math.PI / 180)) * image.height;
      //   const endY =
      //     image.height - Math.cos(angle * (Math.PI / 180)) * image.height;
      //   ctx.moveTo(startX, startY);
      //   ctx.lineTo(endX, endY);
      //   ctx.stroke();

      //   ctx.font = "12px Arial";
      //   ctx.fillStyle = "red";
      //   ctx.fillText(`Angle: ${angle.toFixed(1)} degrees`, position + 10, 20);

      //   // const sc = computeSymmetryScore(result, position, angle);
      //   // console.log(sc);
      //   // setSymmetryScore(sc);
      // });
    });
  }, []);

  return (
    <Group position="center">
      <div style={{ position: "relative" }}>
        <img src={url} width={768} height={768} />
        <canvas
          ref={canvasRef}
          width={768}
          height={768}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      Symmetry score: {symmetryScore}
    </Group>
  );
}

export default function SobelPage() {
  return (
    <PageLayout header={"color-supreme: extract dominant colors"}>
      {testImages.slice(0, 5).map((testImage) => {
        return <Sobel key={testImage} imageUrl={testImage} />;
      })}
    </PageLayout>
  );
}
