import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

function findExports(filePath: string): string[] {
  const currentDir = process.cwd();
  const absoluteFilePath = path.resolve(currentDir, filePath);

  const sourceFile = ts.createSourceFile(
    absoluteFilePath,
    fs.readFileSync(absoluteFilePath, "utf8"),
    ts.ScriptTarget.ES2015
  );

  const exports: string[] = [];

  sourceFile.forEachChild((node) => {
    if (ts.isExportDeclaration(node)) {
      const { moduleSpecifier } = node;
      if (moduleSpecifier && ts.isStringLiteral(moduleSpecifier)) {
        const importedFilePath = path.resolve(
          path.dirname(absoluteFilePath),
          moduleSpecifier.text + ".ts"
        );
        exports.push(importedFilePath);
      }
    }
  });

  return exports;
}

function processFile(filePath: string): string {
  const sourceFile = ts.createSourceFile(
    filePath,
    fs.readFileSync(filePath, "utf8"),
    ts.ScriptTarget.ES2015
  );

  let output = "";

  sourceFile.forEachChild((node) => {
    if (!ts.isImportDeclaration(node)) {
      output += node.getFullText(sourceFile) + "\n";
    }
  });

  return output;
}

function concatFilesInTopologicalOrder(
  filePaths: string[],
  visited: Set<string> = new Set(),
  output: string[] = []
): string[] {
  for (const filePath of filePaths) {
    if (!visited.has(filePath)) {
      visited.add(filePath);
      const exports = findExports(filePath);
      concatFilesInTopologicalOrder(exports, visited, output);
      output.push(processFile(filePath));
    }
  }

  return output;
}

export interface Props {
  input: string;
  output: string;
}

export function concatTs(props: Props) {
  const indexFilePath = props.input;
  const outputFile = props.output;

  const exportedFiles = findExports(indexFilePath);
  const concatenatedContent =
    concatFilesInTopologicalOrder(exportedFiles).join("\n");

  fs.writeFileSync(outputFile, concatenatedContent);

  return outputFile;
}
