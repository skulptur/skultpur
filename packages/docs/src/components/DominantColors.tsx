import React, { useEffect, useState } from "react";
import { getDominantColors, rgbToHex } from "color-supreme";
import { getImageFromUrl } from "pixel-paradise";
import { Swatches } from "./Swatches";
import { Group } from "@mantine/core";

type DominantColorsProps = {
  imageUrl: string;
};
export function DominantColors({ imageUrl }: DominantColorsProps) {
  const [dominantColors, setDominantColors] = useState<string[]>([]);

  useEffect(() => {
    getImageFromUrl(imageUrl).then((colors) => {
      const dominantColors = getDominantColors(colors, 5).map(rgbToHex);
      setDominantColors(dominantColors);
    });
  }, []);

  return (
    <Group position="center">
      <img src={imageUrl} width={768 * 0.4} height={768 * 0.4} />
      <Swatches colors={dominantColors} />
    </Group>
  );
}
