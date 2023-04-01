import React from "react";
import { Box } from "@mantine/core";
import { AppContainer } from "../../../components/AppContainer";
import { NestedNavbar } from "../../../components/NestedNavbar";
import { LibraryReadme } from "../../../components/LibraryReadme";

export default function SocialMatrixReadme() {
  return (
    <AppContainer title="Skulptur - Libraries docs" navbar={<NestedNavbar />}>
      <Box maw={1200}>
        <LibraryReadme libraryName="social-matrix" />
      </Box>
    </AppContainer>
  );
}
