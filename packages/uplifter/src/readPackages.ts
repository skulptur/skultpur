import glob from "glob";
import fs from "fs/promises";
import path from "path";
import {
  packageJsonSchemaValidator,
  isPackageJsonSchema,
} from "./packageJsonSchema";

async function checkIfExists(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

export async function readPackages(searchDir: string) {
  const pattern = `${searchDir}/*/package.json`;

  const filePaths = await new Promise<string[]>((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const packageJsons = await Promise.all(
    filePaths.map(async (filePath) => {
      const contents = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(contents);
      const absolutePath = path.resolve(filePath);
      const packagePath = path.dirname(absolutePath);
      const readmePath = path.resolve(packagePath, "README.md");
      const readmeExists = await checkIfExists(readmePath);

      if (!readmeExists) {
        throw new Error(
          "No Readme found for " + data.name + " at " + readmePath
        );
      }

      return {
        data,
        packageJsonPath: absolutePath,
        packagePath,
        readmePath,
      };
    })
  );

  const validated = packageJsons.filter((json) => {
    const isValid = isPackageJsonSchema(json.data);
    if (!isValid) {
      console.error(
        "Package json of " +
          json.data.name +
          " doesn't conform to our schema.\n" +
          JSON.stringify([...packageJsonSchemaValidator.Errors(json)], null, 2)
      );
    }
    return isValid;
  });

  return validated;
}
