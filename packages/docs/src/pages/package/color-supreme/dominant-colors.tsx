import React, { useEffect, useState } from "react";
import { getDominantColors, rgbToHex } from "color-supreme";
import { getImageFromUrl } from "pixel-paradise";
import { PageLayout } from "../../../components/PageLayout";

const getColors = async (url: string, colors = 5) => {
  const pixels = await getImageFromUrl(url);
  return getDominantColors(pixels, colors).map(rgbToHex);
};

type DominantColorsProps = {
  url: string;
};

function DominantColors({ url }: DominantColorsProps) {
  const [dominantColors, setDominantColors] = useState<String[]>([]);

  useEffect(() => {
    getColors(url).then((colors) => {
      setDominantColors(colors);
    });
  }, []);

  return (
    <>
      <img src={url} width={768 * 0.25} height={768 * 0.25} />
      {dominantColors.toString()}
    </>
  );
}

export default function ColorSupremeReadme() {
  return <PageLayout />;
}
