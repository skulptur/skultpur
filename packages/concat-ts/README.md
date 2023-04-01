<!-- infuser start title -->  
# concat-ts  
<!-- infuser end title -->
<!-- infuser start description -->  
Simple CLI tool to concats exported typescript files.  
<!-- infuser end description -->

## Description

concat-ts is a command-line utility that processes TypeScript files, concatenating them while preserving their export order. It simplifies the process of merging exported TypeScript files into a single output file, making it easier to manage and share code.

## Features

Concatenates TypeScript files in topological order based on their exports. Removes import declarations from the output file. Easy to integrate into your build process

## Installation

Install concat-ts as a global package:

```bash
npm install -g concat-ts
```

Or, add it as a dependency to your project:

```bash
npm install concat-ts --save-dev
```

## Usage

Command Line

```bash
concat-ts -i <input_entry_path> -o <output_path>
```

- -i, --input <path>: Input entry path (required)
- -o, --output <path>: Output path (required)

Programmatically

```typescript
import { concatTs } from "concat-ts";

concatTs({
  input: "path/to/input/entry.ts",
  output: "path/to/output/file.ts",
});
```

Example
Given the following TypeScript files:

index.ts

```typescript
export { default as Foo } from "./Foo";
export { default as Bar } from "./Bar";
```

Foo.ts

```typescript
export default class Foo {
  // ...
}
```

Bar.ts

```typescript
export default class Bar {
  // ...
}
```

Running the command:

```bash
concat-ts -i index.ts -o output.ts
```

Will produce the following concatenated output file:

output.ts

```typescript
export default class Foo {
  // ...
}

export default class Bar {
  // ...
}
```

As you can see this is a simple concat and things such as the default exports will not be fixed. That being said, the files are topologically imported.

## License

MIT License

# Development

### **dev**

`npm run dev`

Runs the CLI application.

You can pass arguments to your application by running `npm run dev -- --your-argument`. The extra `--` is so that your arguments are passed to your CLI application, and not `npm`.

### **clean**

`npm run clean`

Removes any built code and any built executables.

### **build**

`npm run build`

Cleans, then builds the TypeScript code.

Your built code will be in the `./dist/` directory.

### **test**

`npm run test`

Cleans, then builds, and tests the built code.

### **bundle**

`npm run bundle`

Cleans, then builds, then bundles into native executables for Windows, Mac, and Linux.

Your shareable executables will be in the `./exec/` directory.

<!-- infuser start footer -->  
## Notice  
This library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  
<!-- infuser end footer -->
