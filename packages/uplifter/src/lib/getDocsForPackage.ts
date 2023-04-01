import { PackageJsonSchema } from "./packageJsonSchema";
import path from "path";
import fs from "fs/promises";
import { readdir } from "fs/promises";
import { join } from "path";

async function getTsFilesInDir(dirPath: string): Promise<string[]> {
  try {
    const dirents = await readdir(dirPath, { withFileTypes: true });
    const tsFiles = dirents
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".ts"))
      .map((dirent) => join(dirPath, dirent.name));
    return tsFiles;
  } catch (err) {
    if (err.code === "ENOENT") {
      // If the directory doesn't exist, return an empty array
      return [];
    } else {
      // If there's another error, re-throw it
      throw err;
    }
  }
}

export async function getDocsExamples(name: string) {
  const dirAbove = path.join(__dirname, "..", "..", "..");
  const docExamples = path.resolve(dirAbove, "docs/src/examples/", name);

  const examplePaths = await getTsFilesInDir(docExamples);
  const examples = Promise.all(
    examplePaths.map(async (filePath) => {
      const name = path.basename(filePath, path.extname(filePath));
      const content = await fs.readFile(filePath, "utf-8");
      return {
        name,
        content,
      };
    })
  );

  return examples;
}

const notice =
  "This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding.";

const MIT = `
This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
`;

const licenses = {
  MIT,
};

export async function getDocsForPackage(pkg: PackageJsonSchema) {
  const examples = await getDocsExamples(pkg.name);

  return {
    examples,
    installYarn: "yarn add " + pkg.name,
    installNpm: "npm install " + pkg.name + " --save",
    notice,
    licenseNotice: licenses[pkg.license],
  };
}
