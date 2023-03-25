#!/usr/bin/env node

import * as fs from "fs-extra";
import * as path from "path";
import ignore from "ignore";

export type CopyTemplateProps = {
  templateDir: string;
  targetDir: string;
  libraryName: string;
};

export type SourceAndDest = {
  src: string;
  dest: string;
};

// Copy function
async function copyTemplate({
  templateDir,
  targetDir,
  libraryName,
  src,
  dest,
}: CopyTemplateProps & SourceAndDest) {
  // Load .gitignore
  const gitignoreContent = fs.readFileSync(
    path.join(templateDir, ".gitignore"),
    "utf-8"
  );
  const ig = ignore().add(gitignoreContent);
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (ig.ignores(entry.name)) {
      continue;
    }

    if (entry.isFile()) {
      let content = await fs.readFile(srcPath, "utf-8");
      if (src === templateDir) {
        content = content.replace(/typescript-library/g, libraryName);
      }
      await fs.outputFile(destPath, content);
    } else if (entry.isDirectory()) {
      await fs.ensureDir(destPath);
      await copyTemplate({
        templateDir,
        targetDir,
        libraryName,
        src: srcPath,
        dest: destPath,
      });
    }
  }
}

export async function copyTemplateAndInstall(props: CopyTemplateProps) {
  await copyTemplate({
    ...props,
    src: props.templateDir,
    dest: props.targetDir,
  });

  // Execute yarn in the new directory
  const { exec } = require("child_process");
  exec(
    "yarn",
    { cwd: props.targetDir },
    (error: any, stdout: any, stderr: any) => {
      if (error) {
        return console.error(`exec error: ${error}`);
      }
      console.log(stdout);
      console.error(stderr);
    }
  );
}
