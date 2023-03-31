import glob from "glob";
import { readFile, getSlots } from "infuser";

export async function readMarkdownFiles(searchDir: string) {
  const pattern = `${searchDir}/*/*.md`;

  const filePaths = await new Promise<string[]>((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const contents = await Promise.all(
    filePaths.map(async (filePath) => {
      const openedFile = await readFile(filePath);
      const slots = getSlots(
        openedFile.fileContent,
        [],
        openedFile.commentStyle
      );

      return {
        filePath,
        slots,
        ...openedFile,
      };
    })
  );

  return contents;
}
