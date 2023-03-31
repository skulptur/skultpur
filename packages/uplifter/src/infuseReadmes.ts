import { Package } from "./readPackages";
import { updateFile } from "infuser";
import { code, heading, lines, lineBreak } from "markdown-fns";

export async function infuseReadmes(pkg: Package) {
  try {
    await updateFile(pkg.readmePath, [
      {
        slotName: "title",
        newContent: `\n${heading(1, pkg.data.name)}\n`,
      },
      {
        slotName: "description",
        newContent: `\n${pkg.data.description}\n`,
      },
      {
        slotName: "installation",
        newContent: lines([
          lineBreak(),
          heading(2, "Installation"),
          "yarn",
          code("bash", "yarn add " + pkg.data.name),
          "npm",
          code("bash", "npm install " + pkg.data.name + " --save"),
          lineBreak(),
        ]),
      },
      {
        slotName: "license",
        newContent: lines([
          lineBreak(),
          heading(2, "License"),
          pkg.data.license,
          lineBreak(),
        ]),
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}
