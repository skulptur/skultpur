#!/usr/bin/env node

import { readPackages } from "./readPackages";
import { readMarkdownFiles } from "./readMarkdownFiles";

// Example usage
readPackages("..")
  .then((packageJsons) => {
    console.log(packageJsons);
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
