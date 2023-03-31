import { Type, Static } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

export const packageJsonSchema = Type.Object({
  name: Type.String(),
  version: Type.String(),
  description: Type.String(),
  private: Type.Boolean(),
  keywords: Type.Array(Type.String()),
  homepage: Type.String(),
  //   bugs: Type.Optional(
  //     Type.Union([
  //       Type.String({ format: "uri" }),
  //       Type.Object({
  //         url: Type.String({ format: "uri" }),
  //         email: Type.String({ format: "email" }),
  //       }),
  //     ])
  //   ),
  //   license: Type.Optional(Type.String()),
  //   author: Type.Optional(
  //     Type.Union([
  //       Type.String(),
  //       Type.Object({
  //         name: Type.String(),
  //         email: Type.Optional(Type.String({ format: "email" })),
  //         url: Type.Optional(Type.String({ format: "uri" })),
  //       }),
  //     ])
  //   ),
  //   contributors: Type.Optional(
  //     Type.Array(
  //       Type.Union([
  //         Type.String(),
  //         Type.Object({
  //           name: Type.String(),
  //           email: Type.Optional(Type.String({ format: "email" })),
  //           url: Type.Optional(Type.String({ format: "uri" })),
  //         }),
  //       ])
  //     )
  //   ),
  //   files: Type.Optional(Type.Array(Type.String())),
  //   main: Type.Optional(Type.String()),
  //   browser: Type.Optional(Type.String()),

  //   man: Type.Optional(Type.Union([Type.String(), Type.Array(Type.String())])),
  //   directories: Type.Optional(
  //     Type.Object({
  //       lib: Type.Optional(Type.String()),
  //       bin: Type.Optional(Type.String()),
  //       man: Type.Optional(Type.String()),
  //       doc: Type.Optional(Type.String()),
  //       example: Type.Optional(Type.String()),
  //     })
  //   ),
  //   repository: Type.Optional(
  //     Type.Union([
  //       Type.String({ format: "uri" }),
  //       Type.Object({
  //         type: Type.String(),
  //         url: Type.String({ format: "uri" }),
  //         directory: Type.Optional(Type.String()),
  //       }),
  //     ])
  //   ),
  //   scripts: Type.Optional(
  //     Type.Object(Type.String(), {
  //       additionalProperties: true,
  //     })
  //   ),
  //   config: Type.Optional(Type.Object({})),
  //   dependencies: Type.Optional(
  //     Type.Object(Type.String(), {
  //       additionalProperties: true,
  //     })
  //   ),
  //   devDependencies: Type.Optional(
  //     Type.Object(Type.String(), {
  //       additionalProperties: true,
  //     })
  //   ),
  //   peerDependencies: Type.Optional(
  //     Type.Object(Type.String(), {
  //       additionalProperties: true,
  //     })
  //   ),
  //   optionalDependencies: Type.Optional(
  //     Type.Object(Type.String(), {
  //       additionalProperties: true,
  //     })
  //   ),
  //   engines: Type.Optional(
  //     Type.Object(Type.String(), {
  //       additionalProperties: true,
  //     })
  //   ),
});

export type PackageJsonSchema = Static<typeof packageJsonSchema>;

export const packageJsonSchemaValidator = TypeCompiler.Compile(
  packageJsonSchema
);

export const isPackageJsonSchema = (
  result: any
): result is PackageJsonSchema => {
  return packageJsonSchemaValidator.Check(result);
};
