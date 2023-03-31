import glob from "glob";
import { readFile } from "infuser";

export async function readMarkdownFiles(searchDir: string) {
  const pattern = `${searchDir}/*/*.md`;

  const files = await new Promise<string[]>((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });

  const contents = await Promise.all(
    files.map(async (file) => {
      return readFile(file);
    })
  );

  return contents;
}
