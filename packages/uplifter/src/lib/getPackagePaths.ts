import path from "path";
import fs from "fs/promises";

interface PackageData {
  packageJsonPath: string;
  readmePath: string;
}

export async function getPackagePaths(
  packageName: string
): Promise<PackageData | null> {
  const rootDir = path.dirname(__dirname);
  const packagesPath = path.join(rootDir, "..", "..");
  const packagePath = path.join(packagesPath, packageName);

  try {
    const packageJsonPath = path.join(packagePath, "package.json");
    const readmePath = path.join(packagePath, "README.md");

    await Promise.all([fs.access(packageJsonPath), fs.access(readmePath)]);

    return { packageJsonPath, readmePath };
  } catch (err) {
    console.error(`Error reading package ${packageName}:`, err);
  }

  return null;
}
