import React from "react";
import { Title, Box, useMantineTheme } from "@mantine/core";
import { packages } from "../data/packages";
import { useMarkdown } from "../hooks/useMarkdown";
import { updateSlots, getSlot } from "infuser";

export type LibraryReadmeProp = {
  libraryName: keyof typeof packages;
};

export function LibraryReadme({ libraryName }: LibraryReadmeProp) {
  const theme = useMantineTheme();

  const pkg = packages[libraryName];

  const updates = [
    {
      slotName: "title",
      newContent: "",
    },
    {
      slotName: "footer",
      newContent: "",
    },
  ];
  if (pkg.private) {
    updates.push({
      slotName: "installation",
      newContent: "",
    });
  }

  const updatedReadme = updateSlots(pkg.readme, updates, "md");

  // this remove first occurence is a quick and dirty way to remove the title
  // it is so we can style the title differently more easily
  const content = useMarkdown(updatedReadme);
  const footerSlot = getSlot(pkg.readme, "footer", "md");
  const footer = useMarkdown(footerSlot ? footerSlot.content : "");

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
      <Box p="md" maw={1000} m="auto">
        {footer}
      </Box>
    </>
  );
}
