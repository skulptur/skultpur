import React from "react";
import { Title, Text, Box, useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { packages } from "../data/packages";

export type LibraryReadmeProp = {
  libraryName: keyof typeof packages;
};

export function LibraryReadme({ libraryName }: LibraryReadmeProp) {
  const theme = useMantineTheme();

  const pkg = packages[libraryName];

  return (
    <>
      <Box p="md" maw={1000} m="auto">
        <Title order={1}>{pkg.name}</Title>
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
          <Text mb="xl">{pkg.description}</Text>

          <Text mb="sm">Install with yarn</Text>
          <Prism mb="lg" language="bash">
            {pkg.usage.installYarn}
          </Prism>
          <Text mb="sm">Install with npm</Text>
          <Prism mb="lg" language="bash">
            {pkg.usage.installNpm}
          </Prism>

          {pkg.usage.examples.length > 0 && (
            <Title mb="lg" order={2}>
              Use
            </Title>
          )}
          {pkg.usage.examples.map((example) => {
            return (
              <React.Fragment key={example.name}>
                <Text mb="sm">{example.name}</Text>
                <Prism mb="lg" language="typescript">
                  {example.content}
                </Prism>
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
