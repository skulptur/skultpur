import React from "react";
import { Title, Text, Box, useMantineTheme } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { packages } from "../data/packages";
import { useMarkdown } from "../hooks/useMarkdown";

// // Usage example
// const originalString = "I like apples, but I love apples more.";
// const targetString = "apples";
// const result = removeFirstOccurrence(originalString, targetString);
// console.log(result); // Output: "I like , but I love apples more."
function removeFirstOccurrence(str: string, target: string) {
  const index = str.indexOf(target);

  if (index !== -1) {
    return str.slice(0, index) + str.slice(index + target.length);
  }

  return str;
}

export type LibraryReadmeProp = {
  libraryName: keyof typeof packages;
};

export function LibraryReadme({ libraryName }: LibraryReadmeProp) {
  const theme = useMantineTheme();

  const pkg = packages[libraryName];

  // this remove first occurence is a quick and dirty way to remove the title
  // it is so we can style the title differently more easily
  const content = useMarkdown(removeFirstOccurrence(pkg.readme, libraryName));

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
          {content}
          {/* <Text mb="xl">{pkg.description}</Text> */}

          {/* {!pkg.private && (
            <>
              <Text mb="sm">Install with yarn</Text>
              <Prism mb="lg" language="bash">
                {pkg.usage.installYarn}
              </Prism>
              <Text mb="sm">Install with npm</Text>
              <Prism mb="lg" language="bash">
                {pkg.usage.installNpm}
              </Prism>
            </>
          )}

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
          })} */}
        </Box>
      </Box>
    </>
  );
}
