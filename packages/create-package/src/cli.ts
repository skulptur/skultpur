#!/usr/bin/env node

import { program } from "commander";
import { copyTemplateAndInstall } from "./index";
import Enquirer from "enquirer";
import * as path from "path";
import * as fs from "fs-extra";

// Parse command line arguments
program
  .option("-t, --template-dir <path>", "Template directory path")
  .option("-d, --target-dir <path>", "Target directory path")
  .option("-n, --library-name <name>", "New library name")
  .parse(process.argv);

const options = program.opts();

// Use Enquirer to prompt the user for the necessary information if the options are not provided
async function promptUser() {
  const enquirer = new Enquirer();

  const questions = [];
  if (!options.templateDir) {
    const templateDirs = fs
      .readdirSync("./templates", { withFileTypes: true })
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name);
    questions.push({
      type: "select",
      name: "templateDir",
      message: "Select the template directory:",
      choices: templateDirs,
      initial: 0,
    });
  }
  if (!options.libraryName) {
    questions.push({
      type: "input",
      name: "libraryName",
      message: "Enter the new library name:",
    });
    // if (!options.targetDir) {
    //   questions.push({
    //     type: "input",
    //     name: "targetDir",
    //     message: "Enter the target directory path:",
    //     initial: path.join(process.cwd(), "../", options.name || answers.libraryName),
    //   });
    // }
  }
  const answers = await enquirer.prompt(questions);
  const mergedOptions = { ...options, ...answers };
  mergedOptions.targetDir =
    mergedOptions.targetDir ||
    path.join(process.cwd(), "../", mergedOptions.libraryName);

  return mergedOptions;
}

// Call the copyTemplateAndInstall function with the options
(async () => {
  const mergedOptions = await promptUser();
  copyTemplateAndInstall({
    templateDir: path.join("./templates", mergedOptions.templateDir),
    targetDir: mergedOptions.targetDir,
    libraryName: mergedOptions.libraryName,
  });
})();
