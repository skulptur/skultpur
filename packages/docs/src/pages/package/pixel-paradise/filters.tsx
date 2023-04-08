import React from "react";
import { PageLayout } from "../../../components/PageLayout";
import { testImages } from "../../../data/testImages";
import { SimpleGrid } from "@mantine/core";

type FilteredImageProps = {
  imageUrl: string;
};
export function FilteredImage({ imageUrl }: FilteredImageProps) {
  return <img src={imageUrl} style={{ width: "100%" }} />;
}

export default function FilteredImagePage() {
  return (
    <PageLayout header={"color-supreme: extract dominant colors"}>
      <SimpleGrid cols={3}>
        {testImages.map((testImage) => {
          return <FilteredImage key={testImage} imageUrl={testImage} />;
        })}
      </SimpleGrid>
    </PageLayout>
  );
}
