#!/usr/bin/env node

import { program } from "commander";
import { copyTemplateAndInstall } from "./index";

// Parse command line arguments
program
  .option("-t, --template-dir <path>", "Template directory path")
  .option("-d, --target-dir <path>", "Target directory path")
  .option("-n, --library-name <name>", "New library name")
  .parse(process.argv);

const options = program.opts();

copyTemplateAndInstall({
  templateDir: options.templateDir,
  targetDir: options.targetDir,
  libraryName: options.libraryName,
});
