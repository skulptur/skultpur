import React from "react";
import { PageLayout } from "../../../components/PageLayout";
import { testImages } from "../../../data/testImages";
import { DominantColors } from "../../../components/DominantColors";

export default function DominantColorsPage() {
  return (
    <PageLayout header={"color-supreme: extract dominant colors"}>
      {testImages.map((testImage) => {
        return <DominantColors key={testImage} imageUrl={testImage} />;
      })}
    </PageLayout>
  );
}
