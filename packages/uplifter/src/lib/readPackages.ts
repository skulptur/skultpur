import fs from "fs/promises";
import path from "path";
import {
  packageJsonSchemaValidator,
  isPackageJsonSchema,
  PackageJsonSchema,
} from "./packageJsonSchema";
import { getDocsForPackage } from "./getDocsForPackage";
import { getPackagePaths } from "./getPackagePaths";

type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
type ArrayElement<T extends any[]> = T extends (infer U)[] ? U : never;
// get the return type, unwrap the promise and get the type of element of array
export type Package = ArrayElement<Awaited<ReturnType<typeof readPackages>>>;

export async function readPackages(searchDir: string) {
  const entries = await fs.readdir(searchDir, { withFileTypes: true });

  const packages = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const packagePath = path.join(searchDir, entry.name);
        const paths = await getPackagePaths(entry.name);
        if (!paths) {
          throw new Error(`Failed to read package data for ${packagePath}`);
        }
        const packageJsonPath = paths.packageJsonPath;
        const contents = await fs.readFile(packageJsonPath, "utf8");
        const data = JSON.parse(contents) as PackageJsonSchema;
        const docs = await getDocsForPackage(data);
        return {
          data,
          docs,
        };
      })
  );

  const validatedPackages = packages.filter((pkg) => {
    const isValid = isPackageJsonSchema(pkg.data);
    if (!isValid) {
      console.error(
        "Package json of " +
          pkg.data.name +
          " doesn't conform to our schema.\n" +
          JSON.stringify(
            [...packageJsonSchemaValidator.Errors(pkg.data)],
            null,
            2
          )
      );
    }
    return isValid;
  });

  return validatedPackages;
}
