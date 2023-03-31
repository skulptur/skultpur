import { PackageJsonSchema } from "./packageJsonSchema";

const notice =
  "This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding.";

const MIT = `
This library is open source software released under the MIT license. See the LICENSE file for more information.

I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.
`;

const licenses = {
  MIT,
};

export function getDocsForPackage(pkg: PackageJsonSchema) {
  return {
    installYarn: "yarn add " + pkg.name,
    installNpm: "npm install " + pkg.name + " --save",
    notice,
    licenseNotice: licenses[pkg.license],
  };
}
