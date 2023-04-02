import React from "react";
import { ColorSwatch, Group } from "@mantine/core";

interface SwatchesProps {
  colors: string[];
  spacing?: string;
}

export const Swatches: React.FC<SwatchesProps> = ({
  colors,
  spacing = "xs",
}) => {
  const swatches = colors.map((color) => (
    <ColorSwatch key={color} color={color} size="40" />
  ));

  return (
    <Group position="center" spacing={spacing}>
      {swatches}
    </Group>
  );
};
