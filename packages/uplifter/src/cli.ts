#!/usr/bin/env node

import { readPackages } from "./lib/readPackages";
import { infuseReadmes } from "./lib/infuseReadmes";

// Example usage
readPackages("..")
  .then((packages) => {
    console.log(packages);
    return Promise.all(
      packages.map((pkg) => {
        return infuseReadmes(pkg);
      })
    );
  })
  .catch((err) => {
    console.error(err);
  });

// // Example usage
// readMarkdownFiles("..")
//   .then((markdownFiles) => {
//     markdownFiles.forEach((file) => {
//       if (file.slots.length) {
//         console.log(file.filePath, file.slots);
//       }
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// import { program } from "commander";
// import { log } from "./index";

// program
//   .option("-i, --input <path>", "Input entry path")
//   .option("-o, --output <path>", "Output path")
//   .parse(process.argv);

// const options = program.opts();

// log(JSON.stringify(options));
