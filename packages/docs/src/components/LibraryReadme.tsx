import React from "react";
import { PageLayout } from "./PageLayout";
import { packages } from "../data/packages";
import { useReadme } from "../hooks/useReadme";
import { Title } from "@mantine/core";

export type LibraryReadmeProp = {
  libraryName: keyof typeof packages;
};

export function LibraryReadme(props: LibraryReadmeProp) {
  const readme = useReadme(props);
  return (
    <PageLayout
      header={<Title order={1}>{readme.title}</Title>}
      footer={readme.footer}
    >
      {readme.content}
    </PageLayout>
  );
}
