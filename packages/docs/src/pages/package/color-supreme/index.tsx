import React, { useEffect, useState } from "react";
import { Title, Text, Box, useMantineTheme } from "@mantine/core";
import { AppContainer } from "../../../components/AppContainer";
import { NestedNavbar } from "../../../components/NestedNavbar";
import { Prism } from "@mantine/prism";
import { getDominantColors, rgbToHex } from "color-supreme";
import { getImageFromUrl } from "pixel-paradise";

export type LibraryReadmeProp = {
  readableName: string;
  libraryName: string;
  description: string;
  children: React.ReactNode;
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

function LibraryReadme({
  libraryName,
  description,
  children,
}: LibraryReadmeProp) {
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

          {children}
        </Box>
      </Box>
    </>
  );
}

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

export default function Home() {
  return (
    <AppContainer title="Skulptur - Libraries docs" navbar={<NestedNavbar />}>
      <Box maw={1200}>
        <LibraryReadme
          readableName="Color Supreme"
          libraryName="color-supreme"
          description="A powerful library for extracting dominant colors from images. It uses the k-means clustering algorithm to analyze the colors in an image and identify the most dominant ones, making it ideal for a range of applications such as image processing, data visualization, and search algorithms."
        >
          {/* <DominantColors url="./images/0.png" /> */}
          TODO: examples
        </LibraryReadme>
      </Box>
    </AppContainer>
  );
}
