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
          "Yarn",
          code("bash", pkg.docs.installYarn),
          "NPM",
          code("bash", pkg.docs.installNpm),
          lineBreak(),
        ]),
      },
      {
        slotName: "notes",
        newContent: lines([
          lineBreak(),
          heading(2, "Notice"),
          pkg.docs.notice,
          lineBreak(),
        ]),
      },
      {
        slotName: "license",
        newContent: lines([
          lineBreak(),
          heading(2, "License"),
          pkg.docs.licenseNotice,
          lineBreak(),
        ]),
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}
