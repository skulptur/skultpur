import React from "react";
import { Title, Text, Box, useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";

export type LibraryReadmeProp = {
  libraryName: string;
};
const browserExample = `
import { getDominantColors, rgbToHex } from 'color-supreme'
import { getImageFromUrl } from 'pixel-paradise'

const getColors = async (url: string, colors = 5) => {
  const pixels = await getImageFromUrl(url)
  return getDominantColors(pixels, colors).map(rgbToHex)
}
getColors('your image url').then(console.log)
`;
const nodeExample = `
import sharp from 'sharp'
import { getDominantColors, imageToPixels, rgbToHex } from 'color-supreme'

const getColors = async (path: string, colors = 5) => {
  const { data, info } = await sharp(path)
    .raw()
    .toBuffer({ resolveWithObject: true })
  const pixels = imageToPixels(data, info.width!, info.height!)

  return getDominantColors(pixels, colors).map(rgbToHex)
}

getColors('your image path').then(console.log)
`;
export function LibraryReadme({ libraryName }: LibraryReadmeProp) {
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
          <Text mb="xl">{"description"}</Text>

          <Text mb="sm">Install with yarn</Text>
          <Prism mb="lg" language="bash">{`yarn add ${libraryName}`}</Prism>
          <Text mb="sm">Install with npm</Text>
          <Prism mb="lg" language="bash">{`yarn add ${libraryName}`}</Prism>

          <Title mb="lg" order={2}>
            Use
          </Title>
          <Text mb="lg">Extracting dominant colors:</Text>

          <Text mb="sm">Browser</Text>
          <Prism mb="lg" language="typescript">
            {browserExample}
          </Prism>

          <Text mb="sm">Node (example with sharp)</Text>
          <Prism mb="lg" language="typescript">
            {nodeExample}
          </Prism>
        </Box>
      </Box>
    </>
  );
}
