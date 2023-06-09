import React, { useState } from "react";
import Head from "next/head";
import { NestedNavbar } from "./NestedNavbar";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

export type AppContainer = {
  children: React.ReactNode;
};

export function AppContainer(props: AppContainer) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <title>Skulptur</title>
        <meta name="description" content="Docs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell
          padding={0}
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 250, lg: 250 }}
            >
              <NestedNavbar />
            </Navbar>
          }
          // aside={
          //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          //       aside
          //     </Aside>
          //   </MediaQuery>
          // }
          header={
            <Header height={{ base: 50, md: 70 }} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>

                <Text>Skulptur - Libraries docs</Text>
              </div>
            </Header>
          }
        >
          {props.children}
        </AppShell>
      </main>
    </>
  );
}
