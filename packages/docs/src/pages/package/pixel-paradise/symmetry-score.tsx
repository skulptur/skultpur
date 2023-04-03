import React, { useState, useEffect } from "react";
import { PageLayout } from "../../../components/PageLayout";
import { testImages } from "../../../data/testImages";
import { detectSymmetry, getImageFromUrl } from "pixel-paradise";
import { Group } from "@mantine/core";

type SymmetryScoreProps = {
  imageUrl: string;
};
export function SymmetryScore({ imageUrl }: SymmetryScoreProps) {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    getImageFromUrl(imageUrl).then((image) => {
      const result = detectSymmetry(image);
      console.log(result);
      // setSymmetryScore(dominantColors);
    });
  }, []);

  return (
    <Group position="center">
      <img src={imageUrl} width={768 * 0.4} height={768 * 0.4} />
      {/* <Swatches colors={dominantColors} /> */}
    </Group>
  );
}

export default function SymmetryScorePage() {
  return (
    <PageLayout header={"color-supreme: extract dominant colors"}>
      {testImages.map((testImage) => {
        return <SymmetryScore key={testImage} imageUrl={testImage} />;
      })}
    </PageLayout>
  );
}
