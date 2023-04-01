import fs from "fs/promises";
import path from "path";
import {
  packageJsonSchemaValidator,
  isPackageJsonSchema,
  PackageJsonSchema,
} from "./packageJsonSchema";
import { getPackagePaths } from "./getPackagePaths";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
type ArrayElement<T extends any[]> = T extends (infer U)[] ? U : never;
// get the return type, unwrap the promise and get the type of element of array
export type Package = ArrayElement<Awaited<ReturnType<typeof readPackages>>>;

export async function readPackage(packagePath: string) {
  const entryName = path.basename(packagePath);
  const paths = await getPackagePaths(entryName);

  if (!paths) {
    throw new Error(`Failed to read package data for ${packagePath}`);
  }

  const packageJsonPath = paths.packageJsonPath;
  const contents = await fs.readFile(packageJsonPath, "utf8");
  const data = JSON.parse(contents) as PackageJsonSchema;

  const isValid = isPackageJsonSchema(data);
  if (!isValid) {
    console.error(
      "Package json of " +
        entryName +
        " doesn't conform to our schema.\n" +
        JSON.stringify([...packageJsonSchemaValidator.Errors(data)], null, 2)
    );
    return null;
  }

  return data;
}

export async function readPackages(searchDir: string) {
  const entries = await fs.readdir(searchDir, { withFileTypes: true });

  const packageDirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(searchDir, entry.name));

  const packages = await Promise.all(packageDirs.map(readPackage));

  const validatedPackages = packages.filter((pkg) => pkg !== null);

  return validatedPackages;
}
