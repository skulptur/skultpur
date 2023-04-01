import React from "react";
import { Box, useMantineTheme } from "@mantine/core";

export type PageLayoutProps = {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

export function PageLayout({ header, main, footer }: PageLayoutProps) {
  const theme = useMantineTheme();

  return (
    <>
      <Box p="md" maw={1000} m="auto">
        {header}
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
          {main}
        </Box>
      </Box>
      <Box p="md" maw={1000} m="auto">
        {footer}
      </Box>
    </>
  );
}
