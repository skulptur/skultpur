import { Package } from "./readPackages";
import { getPackagePaths } from "./getPackagePaths";
import { updateFile, SlotUpdate } from "infuser";
import { code, heading, lines } from "markdown-fns";
import { getDocsForPackage } from "./getDocsForPackage";

export async function infuseReadmes(pkg: Package) {
  try {
    const docs = await getDocsForPackage(pkg);
    const updates: Array<SlotUpdate> = [
      {
        slotName: "header",
        newContent: lines(["", heading(1, pkg.name), pkg.description, ""]),
      },
      {
        slotName: "installation",
        newContent: lines([
          "",
          heading(2, "Installation"),
          "Yarn",
          code("bash", docs.installYarn),
          "NPM",
          code("bash", docs.installNpm),
          "",
        ]),
      },
      {
        slotName: "notes",
        newContent: "",
      },
      {
        slotName: "license",
        newContent: lines([
          "",
          heading(2, "License"),
          docs.licenseNotice,
          lines(["", heading(2, "Notice"), docs.notice, ""]),
          "",
        ]),
      },
    ];

    const examples: string[][] = [];

    // add browser example if we have it
    const browserExample = docs.getExample("browser");
    browserExample &&
      examples.push(["Browser", code("typescript", browserExample.content)]);
    // add node example if we have it
    const nodeExample = docs.getExample("node");
    nodeExample &&
      examples.push(["Node", code("typescript", nodeExample.content)]);

    // add usage if we have examples
    examples.length &&
      updates.push({
        slotName: "usage",
        newContent: lines(["", heading(2, "Use"), ...examples.flat(1), ""]),
      });

    const { readmePath } = await getPackagePaths(pkg.name);

    await updateFile(readmePath, updates);
  } catch (error) {
    console.error(error);
  }
}
