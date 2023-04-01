#!/usr/bin/env node

import { readPackages } from "./lib/readPackages";
import { infuseReadmes } from "./lib/infuseReadmes";
import path from "path";
import fs from "fs/promises";
import { getUsage } from "./lib/getDocsForPackage";

readPackages("..")
  .then(async (packages) => {
    // I want to save the data so docs can use
    const dirAbove = path.join(__dirname, "..", "..");
    const docExamples = path.resolve(dirAbove, "docs/src/data", "packages.ts");
    const packagesObject = Object.fromEntries(
      await Promise.all(
        packages.map(async (currentPackage) => {
          const usage = await getUsage(currentPackage.name);
          return [
            currentPackage.name,
            {
              ...currentPackage,
              usage,
            },
          ];
        })
      )
    );

    await fs
      .writeFile(
        docExamples,
        "export const packages = " + JSON.stringify(packagesObject, null, 2)
      )
      .then(() => {
        console.log(`File saved to ${docExamples}`);
      })
      .catch((err) => {
        console.error(err);
      });

    // Then I want to infuse everything
    await Promise.all(
      packages.map((pkg) => {
        return infuseReadmes(pkg);
      })
    );
  })
  .catch((err) => {
    console.error(err);
  });
