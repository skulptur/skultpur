import React from "react";
import { Navbar, ScrollArea, createStyles, rem } from "@mantine/core";
import { LinksGroup } from "./LinksGroup";

const mainMenu = [
  {
    label: "color-supreme",
  },
  {
    label: "pixel-paradise",

    // initiallyOpened: true,
    // links: [
    //   { label: "Overview", link: "/" },
    //   { label: "Forecasts", link: "/" },
    //   { label: "Outlook", link: "/" },
    //   { label: "Real time", link: "/" },
    // ],
  },
  {
    label: "social-matrix",
    // links: [
    //   { label: "Upcoming releases", link: "/" },
    //   { label: "Previous releases", link: "/" },
    //   { label: "Releases schedule", link: "/" },
    // ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },
  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export function NestedNavbar() {
  const { classes } = useStyles();
  const links = mainMenu.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar width={{ sm: 250 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
