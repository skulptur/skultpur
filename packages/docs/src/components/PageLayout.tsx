import React from "react";
import { Box, useMantineTheme } from "@mantine/core";

export type PageLayoutProps = {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export function PageLayout({ header, children, footer }: PageLayoutProps) {
  const theme = useMantineTheme();

  return (
    <Box maw={1200}>
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
          {children}
        </Box>
      </Box>
      <Box p="md" maw={1000} m="auto">
        {footer}
      </Box>
    </Box>
  );
}
