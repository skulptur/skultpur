import React, { useEffect, useState } from "react";
import { getDominantColors, rgbToHex } from "color-supreme";
import { getImageFromUrl } from "pixel-paradise";
import { PageLayout } from "../../../components/PageLayout";
import { Swatches } from "../../../components/Swatches";
import { testImages } from "../../../data/testImages";
import { Group } from "@mantine/core";

type DominantColorsProps = {
  url: string;
};

function DominantColors({ url }: DominantColorsProps) {
  const [dominantColors, setDominantColors] = useState<string[]>([]);

  useEffect(() => {
    getImageFromUrl(url).then((colors) => {
      const dominantColors = getDominantColors(colors, 5).map(rgbToHex);
      setDominantColors(dominantColors);
    });
  }, []);

  return (
    <Group position="center">
      <img src={url} width={768 * 0.4} height={768 * 0.4} />
      <Swatches colors={dominantColors} />
    </Group>
  );
}

export default function ColorSupremeReadme() {
  return (
    <PageLayout header={"color-supreme: extract dominant colors"}>
      {testImages.map((testImage) => {
        return <DominantColors key={testImage} url={testImage} />;
      })}
    </PageLayout>
  );
}
