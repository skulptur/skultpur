#!/usr/bin/env node

import { readPackageJsonFiles } from "./readPackageJsonFiles";

// Example usage
readPackageJsonFiles("..")
  .then((packageJsons) => {
    console.log(packageJsons);
  })
  .catch((err) => {
    console.error(err);
  });

// import { program } from "commander";
// import { log } from "./index";

// program
//   .option("-i, --input <path>", "Input entry path")
//   .option("-o, --output <path>", "Output path")
//   .parse(process.argv);

// const options = program.opts();

// log(JSON.stringify(options));
