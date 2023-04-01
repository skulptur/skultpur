import React from "react";
import { Box } from "@mantine/core";
import { AppContainer } from "../../../components/AppContainer";
import { NestedNavbar } from "../../../components/NestedNavbar";
import { LibraryReadme } from "../../../components/LibraryReadme";
import { useRouter } from "next/router";
import { packages } from "../../../data/packages";

export default function SocialMatrixReadme() {
  const router = useRouter();
  const packageName = router.query.packageName as string;

  // @ts-ignore
  if (!packageName || !packages[packageName]) {
    // TODO: back to main
    return null;
  }

  return (
    <AppContainer title="Skulptur - Libraries docs" navbar={<NestedNavbar />}>
      <Box maw={1200}>
        <LibraryReadme libraryName={packageName as any} />
      </Box>
    </AppContainer>
  );
}
