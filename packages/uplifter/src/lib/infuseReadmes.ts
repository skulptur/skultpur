import { Package } from "./readPackages";
import { updateFile, SlotUpdate } from "infuser";
import { code, heading, lines } from "markdown-fns";

export async function infuseReadmes(pkg: Package) {
  try {
    const updates: Array<SlotUpdate> = [
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
          "",
          heading(2, "Installation"),
          "Yarn",
          code("bash", pkg.docs.installYarn),
          "NPM",
          code("bash", pkg.docs.installNpm),
          "",
        ]),
      },
      {
        slotName: "notes",
        newContent: lines(["", heading(2, "Notice"), pkg.docs.notice, ""]),
      },
      {
        slotName: "license",
        newContent: lines([
          "",
          heading(2, "License"),
          pkg.docs.licenseNotice,
          "",
        ]),
      },
    ];

    const examples: string[][] = [];

    // add browser example if we have it
    const browserExample = pkg.docs.getExample("browser");
    browserExample &&
      examples.push(["Browser", code("typescript", browserExample.content)]);
    // add node example if we have it
    const nodeExample = pkg.docs.getExample("node");
    nodeExample &&
      examples.push(["Node", code("typescript", nodeExample.content)]);

    // add usage if we have examples
    examples.length &&
      updates.push({
        slotName: "usage",
        newContent: lines(["", heading(2, "Use"), ...examples.flat(1), ""]),
      });

    await updateFile(pkg.readmePath, updates);
  } catch (error) {
    console.error(error);
  }
}
