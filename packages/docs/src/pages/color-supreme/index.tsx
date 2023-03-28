import React from "react";
import { Title, Text, Box, useMantineTheme } from "@mantine/core";
import { AppContainer } from "../../components/AppContainer";
import { NestedNavbar } from "../../components/NestedNavbar";
import { Prism } from "@mantine/prism";

export type InstallInstructionsProp = {
  libraryName: string;
};

function InstallInstructions({ libraryName }: InstallInstructionsProp) {
  return (
    <>
      <Text mb="sm">Install with yarn:</Text>
      <Prism mb="lg" language="bash">{`yarn add ${libraryName}`}</Prism>
      <Text mb="sm">Install with npm:</Text>
      <Prism mb="lg" language="bash">{`yarn add ${libraryName}`}</Prism>
    </>
  );
}

export type LibraryHeaderProp = {
  readableName: string;
  libraryName: string;
  description: string;
};

function LibraryHeader({ libraryName, description }: LibraryHeaderProp) {
  const theme = useMantineTheme();

  return (
    <>
      <Box p="md" maw={1000} m="auto">
        <Title order={1}>{libraryName}</Title>
      </Box>
      <Box
        sx={{
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
        }}
      >
        <Box p="md" maw={1000} m="auto">
          <Text mb="xl">{description}</Text>

          <InstallInstructions libraryName={libraryName} />
        </Box>
      </Box>
    </>
  );
}

export default function Home() {
  return (
    <AppContainer title="Skulptur - Libraries docs" navbar={<NestedNavbar />}>
      <Box maw={1200}>
        <LibraryHeader
          readableName="Color Supreme"
          libraryName="color-supreme"
          description="A powerful library for extracting dominant colors from images. It uses the k-means clustering algorithm to analyze the colors in an image and identify the most dominant ones, making it ideal for a range of applications such as image processing, data visualization, and search algorithms."
        />
      </Box>
    </AppContainer>
  );
}
