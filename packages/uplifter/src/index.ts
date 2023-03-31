import glob from "glob";
import fs from "fs";
import {
  packageJsonSchema,
  PackageJsonSchema,
  packageJsonSchemaValidator,
  isPackageJsonSchema,
} from "./packageJsonSchema";

export async function readPackageJsonFiles(
  searchDir: string
): Promise<PackageJsonSchema[]> {
  const pattern = `${searchDir}/*/package.json`;

  const files = await new Promise<string[]>((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const packageJsons = await Promise.all(
    files.map(async (file) => {
      const contents = await fs.promises.readFile(file, "utf8");
      return JSON.parse(contents);
    })
  );

  const validated = packageJsons.filter((json) => {
    const isValid = isPackageJsonSchema(json);
    if (!isValid) {
      throw new Error(
        "Package json of " +
          json.name +
          " doesn't conform to our schema.\n" +
          JSON.stringify([...packageJsonSchemaValidator.Errors(json)], null, 2)
      );
    }
    return isValid;
  });

  // filter out any failed decodings
  return validated;
}
