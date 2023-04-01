import { Package } from "./readPackages";
import { getPackagePaths } from "./getPackagePaths";
import { SlotUpdate } from "infuser";
import { updateFile } from "infuser/node";
import { code, heading, lines } from "markdown-fns";
import { getUsage, getLicenseNotice } from "./getDocsForPackage";

export async function infuseReadmes(pkg: Package) {
  try {
    const docs = await getUsage(pkg.name);

    const updates: Array<SlotUpdate> = [
      {
        slotName: "title",
        newContent: lines(["", heading(1, pkg.name), ""]),
      },
      {
        slotName: "description",
        newContent: lines(["", pkg.description, ""]),
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
        slotName: "footer",
        newContent: lines([
          "",
          heading(2, "Notice"),
          getLicenseNotice(pkg.license),
          "",
        ]),
      },
    ];

    if (docs.examples.length) {
      updates.push({
        slotName: "usage",
        newContent: lines([
          "",
          heading(2, "Use"),
          ...docs.examples
            .map((example) => {
              return lines([example.name, code("typescript", example.content)]);
            })
            .flat(1),
          "",
        ]),
      });
    }

    const { readmePath } = await getPackagePaths(pkg.name);

    await updateFile(readmePath, updates);
  } catch (error) {
    console.error(error);
  }
}
