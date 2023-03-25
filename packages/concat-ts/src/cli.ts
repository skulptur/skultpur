#!/usr/bin/env node

import { program } from "commander";
import { concatTs } from "./index";

program
  .option("-i, --input <path>", "Input entry path")
  .option("-o, --output <path>", "Output path")
  .parse(process.argv);

const options = program.opts();

console.log(
  concatTs({
    input: options.input,
    output: options.output,
  })
);
