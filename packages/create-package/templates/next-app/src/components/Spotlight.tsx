import React from "react";
import { SpotlightProvider, SpotlightAction } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export type SpotlightProps = {
  children: React.ReactNode;
};

export const Spotlight = ({ children }: SpotlightProps): JSX.Element => {
  const actions: SpotlightAction[] = [];

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + p"
      nothingFoundMessage="Nothing found..."
    >
      {children}
    </SpotlightProvider>
  );
};
