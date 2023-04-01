#!/usr/bin/env node

import { readPackages } from "./lib/readPackages";
import { infuseReadmes } from "./lib/infuseReadmes";
import path from "path";
import fs from "fs/promises";

readPackages("..")
  .then(async (packages) => {
    // I want to save the data so docs can use
    const dirAbove = path.join(__dirname, "..", "..");
    const docExamples = path.resolve(dirAbove, "docs/data", "packages.json");
    await fs
      .writeFile(docExamples, JSON.stringify(packages, null, 2))
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
