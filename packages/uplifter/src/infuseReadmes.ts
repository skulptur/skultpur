import { Package } from "./readPackages";
import { updateFile } from "infuser";
import { code, heading, lines, lineBreak } from "markdown-fns";

const notice =
  "This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding.";

const MIT = `
This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
`;

const licenses = {
  MIT,
};

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
          code("bash", "yarn add " + pkg.data.name),
          "NPM",
          code("bash", "npm install " + pkg.data.name + " --save"),
          lineBreak(),
        ]),
      },
      {
        slotName: "notes",
        newContent: lines([
          lineBreak(),
          heading(2, "Notice"),
          notice,
          lineBreak(),
        ]),
      },
      {
        slotName: "license",
        newContent: lines([
          lineBreak(),
          heading(2, "License"),
          licenses[pkg.data.license],
          lineBreak(),
        ]),
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}
