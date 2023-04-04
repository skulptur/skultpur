import React from "react";
import { PageLayout } from "../../../components/PageLayout";
import { testImages } from "../../../data/testImages";
import { SimpleGrid } from "@mantine/core";

export default function FilteredImagePage() {
  return (
    <PageLayout header={"color-supreme: extract dominant colors"}>
      <SimpleGrid cols={3}>
        {testImages.map((testImage) => {
          return <img src={testImage} style={{ width: "100%" }} />;
        })}
      </SimpleGrid>
    </PageLayout>
  );
}
