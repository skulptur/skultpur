import fs from "fs";
import path from "path";
import ts from "typescript";

// WIP implemenentation. The idea is that we can export everything but respect commented out exports as a way to exclude
const directoryPath = path.join(__dirname, "src/lib");

// Function to recursively get all files in a directory
function getAllFiles(dirPath: string, arrayOfFiles: string[]): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Get all files in the ./src/lib directory
const files = getAllFiles(directoryPath, []);

// Create a TypeScript program to analyze the source files
const program = ts.createProgram(files, {});
const checker = program.getTypeChecker();

// Get the root source file
const rootSourceFile = program.getSourceFile(
  path.join(__dirname, "src", "index.ts")
);

// Get all export statements from the root source file
const exportStatements = rootSourceFile?.statements.filter(
  (statement) => ts.isExportDeclaration(statement) && !statement.isTypeOnly
) as ts.ExportDeclaration[];

// Generate export statements for each file, respecting commented out exports
const codeExports = files
  .filter((file) => file.endsWith(".ts"))
  .map((file) => {
    const relativePath = path.relative(path.join(__dirname, "src"), file);
    const exportName = path.basename(file, ".ts");

    // Check if the export is commented out in the index.ts file
    const isExportCommentedOut = exportStatements.some((exportStatement) => {
      const namedExports = ts.isExportDeclaration(exportStatement)
        ? exportStatement.exportClause?.elements
        : ts.isNamespaceExport(exportStatement)
        ? exportStatement.exportClause?.properties
        : [];
      return namedExports?.some((namedExport) => {
        const isNamedExportCommentedOut =
          ts.isIdentifier(namedExport.name) &&
          namedExport.name.text === exportName &&
          namedExport.parent?.getText(rootSourceFile) !==
            namedExport.getText(rootSourceFile);
        return isNamedExportCommentedOut;
      });
    });

    return isExportCommentedOut ? "" : `export * from './${relativePath}'`;
  })
  .join("\n");

// Write the export statements to the index.ts file
fs.writeFileSync(path.join(__dirname, "src", "index.ts"), codeExports);

console.log("Index file written successfully!");
