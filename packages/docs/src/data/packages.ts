export const packages = {
  "color-supreme": {
    "name": "color-supreme",
    "version": "0.1.1",
    "author": "skulptur",
    "description": "A powerful library for extracting dominant colors from images. It uses the k-means clustering algorithm to analyze the colors in an image and identify the most dominant ones, making it ideal for a range of applications such as image processing, data visualization, and search algorithms.",
    "license": "MIT",
    "private": false,
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/color-supreme",
    "module": "dist/color-supreme.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/color-supreme"
    },
    "keywords": [
      "functional"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why",
      "concat": "concat-ts -i ./src/index.ts -o ./src/output.ts"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/color-supreme.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/color-supreme.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^7.0.8",
      "@types/sharp": "^0.31.1",
      "@types/skmeans": "^0.11.4",
      "concat-ts": "^0.0.8",
      "data-fns": "*",
      "sharp": "^0.31.3",
      "size-limit": "^7.0.8",
      "tsdx": "^0.14.1",
      "tslib": "^2.4.0",
      "typescript": "^4.6.3"
    },
    "dependencies": {
      "ml-kmeans": "^6.0.0",
      "pixel-paradise": "*"
    },
    "readme": "<!-- infuser start title -->  \n# color-supreme  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nA powerful library for extracting dominant colors from images. It uses the k-means clustering algorithm to analyze the colors in an image and identify the most dominant ones, making it ideal for a range of applications such as image processing, data visualization, and search algorithms.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add color-supreme  \n```  \nNPM  \n```bash  \nnpm install color-supreme --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->  \n## Use  \nBrowser  \n```typescript  \nimport { getDominantColors, rgbToHex } from \"color-supreme\";\nimport { getImageFromUrl } from \"pixel-paradise\";\n\nexport const getColors = async (url: string, colors = 5) => {\n  const pixels = await getImageFromUrl(url);\n  return getDominantColors(pixels, colors).map(rgbToHex);\n};\n\n// getColors('your image url').then(console.log)\n  \n```  \nNode  \n```typescript  \nimport sharp from \"sharp\";\nimport { getDominantColors, rgbToHex } from \"color-supreme\";\n\nexport const getColors = async (imagePath: string, colors = 5) => {\n  const { data, info } = await sharp(imagePath)\n    .raw()\n    .toBuffer({ resolveWithObject: true });\n\n  const bufferWithInfo = {\n    buffer: data,\n    width: info.width,\n    height: info.height,\n  };\n\n  return getDominantColors(bufferWithInfo, colors).map(rgbToHex);\n};\n\n// getColors(\"your image path\").then(console.log);\n  \n```  \n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add color-supreme",
      "installNpm": "npm install color-supreme --save",
      "examples": [
        {
          "name": "Browser",
          "content": "import { getDominantColors, rgbToHex } from \"color-supreme\";\nimport { getImageFromUrl } from \"pixel-paradise\";\n\nexport const getColors = async (url: string, colors = 5) => {\n  const pixels = await getImageFromUrl(url);\n  return getDominantColors(pixels, colors).map(rgbToHex);\n};\n\n// getColors('your image url').then(console.log)\n"
        },
        {
          "name": "Node",
          "content": "import sharp from \"sharp\";\nimport { getDominantColors, rgbToHex } from \"color-supreme\";\n\nexport const getColors = async (imagePath: string, colors = 5) => {\n  const { data, info } = await sharp(imagePath)\n    .raw()\n    .toBuffer({ resolveWithObject: true });\n\n  const bufferWithInfo = {\n    buffer: data,\n    width: info.width,\n    height: info.height,\n  };\n\n  return getDominantColors(bufferWithInfo, colors).map(rgbToHex);\n};\n\n// getColors(\"your image path\").then(console.log);\n"
        }
      ]
    }
  },
  "common-fns": {
    "name": "common-fns",
    "version": "0.1.4",
    "author": "skulptur",
    "description": "`common-fns` is a simple utility library that provides commonly used functions such as `always`, `identity`, `isEqual`, and `noop`. These functions can help reduce boilerplate code and make your codebase more expressive and concise.",
    "license": "MIT",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/common-fns",
    "private": false,
    "module": "dist/common-fns.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/common-fns"
    },
    "keywords": [
      "functional",
      "utils"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/common-fns.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/common-fns.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^4.10.2",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "readme": "<!-- infuser start title -->  \n# common-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \n`common-fns` is a simple utility library that provides commonly used functions such as `always`, `identity`, `isEqual`, and `noop`. These functions can help reduce boilerplate code and make your codebase more expressive and concise.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add common-fns  \n```  \nNPM  \n```bash  \nnpm install common-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add common-fns",
      "installNpm": "npm install common-fns --save",
      "examples": []
    }
  },
  "concat-ts": {
    "name": "concat-ts",
    "private": false,
    "version": "0.0.8",
    "description": "Simple CLI tool to concats exported typescript files.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/concat-ts",
    "keywords": [
      "typescript",
      "cli"
    ],
    "license": "MIT",
    "main": "./dist/index.js",
    "bin": "./dist/cli.js",
    "files": [
      "dist/**/*"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/concat-ts.git"
    },
    "scripts": {
      "dev": "ts-node ./src/cli.ts",
      "clean": "rimraf ./dist/ ./exec/",
      "build": "npm run clean && tsc",
      "bundle": "npm run build && pkg . --out-dir ./exec/",
      "execute": "yarn dev -i ./src/index.ts -o ./output.ts"
    },
    "devDependencies": {
      "@types/node": "^18.15.5",
      "pkg": "^5.8.1",
      "rimraf": "^2.6.3",
      "ts-node": "^10.9.1"
    },
    "dependencies": {
      "commander": "^10.0.0",
      "typescript": "^5.0.2"
    },
    "readme": "<!-- infuser start title -->  \n# concat-ts  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nSimple CLI tool to concats exported typescript files.  \n<!-- infuser end description -->\n\n## Description\n\nconcat-ts is a command-line utility that processes TypeScript files, concatenating them while preserving their export order. It simplifies the process of merging exported TypeScript files into a single output file, making it easier to manage and share code.\n\n## Features\n\nConcatenates TypeScript files in topological order based on their exports. Removes import declarations from the output file. Easy to integrate into your build process\n\n## Installation\n\nInstall concat-ts as a global package:\n\n```bash\nnpm install -g concat-ts\n```\n\nOr, add it as a dependency to your project:\n\n```bash\nnpm install concat-ts --save-dev\n```\n\n## Usage\n\nCommand Line\n\n```bash\nconcat-ts -i <input_entry_path> -o <output_path>\n```\n\n- -i, --input <path>: Input entry path (required)\n- -o, --output <path>: Output path (required)\n\nProgrammatically\n\n```typescript\nimport { concatTs } from \"concat-ts\";\n\nconcatTs({\n  input: \"path/to/input/entry.ts\",\n  output: \"path/to/output/file.ts\",\n});\n```\n\nExample\nGiven the following TypeScript files:\n\nindex.ts\n\n```typescript\nexport { default as Foo } from \"./Foo\";\nexport { default as Bar } from \"./Bar\";\n```\n\nFoo.ts\n\n```typescript\nexport default class Foo {\n  // ...\n}\n```\n\nBar.ts\n\n```typescript\nexport default class Bar {\n  // ...\n}\n```\n\nRunning the command:\n\n```bash\nconcat-ts -i index.ts -o output.ts\n```\n\nWill produce the following concatenated output file:\n\noutput.ts\n\n```typescript\nexport default class Foo {\n  // ...\n}\n\nexport default class Bar {\n  // ...\n}\n```\n\nAs you can see this is a simple concat and things such as the default exports will not be fixed. That being said, the files are topologically imported.\n\n## License\n\nMIT License\n\n# Development\n\n### **dev**\n\n`npm run dev`\n\nRuns the CLI application.\n\nYou can pass arguments to your application by running `npm run dev -- --your-argument`. The extra `--` is so that your arguments are passed to your CLI application, and not `npm`.\n\n### **clean**\n\n`npm run clean`\n\nRemoves any built code and any built executables.\n\n### **build**\n\n`npm run build`\n\nCleans, then builds the TypeScript code.\n\nYour built code will be in the `./dist/` directory.\n\n### **test**\n\n`npm run test`\n\nCleans, then builds, and tests the built code.\n\n### **bundle**\n\n`npm run bundle`\n\nCleans, then builds, then bundles into native executables for Windows, Mac, and Linux.\n\nYour shareable executables will be in the `./exec/` directory.\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add concat-ts",
      "installNpm": "npm install concat-ts --save",
      "examples": []
    }
  },
  "copilot-x": {
    "name": "copilot-x",
    "private": false,
    "version": "0.0.1",
    "description": "A simple CLI tool where you are the copilot, because it runs on autopilot.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/copilot-x",
    "keywords": [
      "typescript",
      "cli"
    ],
    "license": "MIT",
    "main": "./dist/index.js",
    "bin": "./dist/cli.js",
    "files": [
      "dist/**/*"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skulptur.git"
    },
    "scripts": {
      "dev": "ts-node ./src/cli.ts",
      "clean": "rimraf ./dist/ ./exec/",
      "build": "npm run clean && tsc",
      "bundle": "npm run build && pkg . --out-dir ./exec/"
    },
    "devDependencies": {
      "@types/node": "^18.15.5",
      "pkg": "^5.8.1",
      "rimraf": "^2.6.3",
      "ts-node": "^10.9.1"
    },
    "dependencies": {
      "commander": "^10.0.0",
      "typescript": "^5.0.2"
    },
    "readme": "<!-- infuser start title -->  \n# copilot-x  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nA simple CLI tool where you are the copilot, because it runs on autopilot.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add copilot-x  \n```  \nNPM  \n```bash  \nnpm install copilot-x --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add copilot-x",
      "installNpm": "npm install copilot-x --save",
      "examples": []
    }
  },
  "create-package": {
    "name": "create-package",
    "private": true,
    "version": "0.0.0",
    "description": "This package has package templates and a scripts to help you kickstart new projects.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/create-package",
    "keywords": [
      "typescript",
      "cli"
    ],
    "license": "MIT",
    "main": "./dist/index.js",
    "bin": "./dist/cli.js",
    "files": [
      "dist/**/*"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skulptur.git"
    },
    "scripts": {
      "dev": "ts-node ./src/cli.ts",
      "clean": "rimraf ./dist/ ./exec/",
      "build": "npm run clean && tsc",
      "bundle": "npm run build && pkg . --out-dir ./exec/",
      "test:library": "rm -rf ./test-target && ts-node ./src/cli.ts --template-dir ./templates/typescript-library --target-dir ./test-target/library --library-name my-new-library",
      "test:cli": "rm -rf ./test-target && ts-node ./src/cli.ts --template-dir ./templates/typescript-cli --target-dir ./test-target/cli --library-name my-new-cli",
      "test:next-app": "rm -rf ./test-target && ts-node ./src/next-app.ts --template-dir ./templates/typescript-next-app --target-dir ./test-target/next-app --library-name my-new-next-app"
    },
    "devDependencies": {
      "@types/inquirer": "^9.0.3",
      "@types/node": "^18.15.5",
      "pkg": "^5.8.1",
      "rimraf": "^2.6.3",
      "ts-node": "^10.9.1"
    },
    "dependencies": {
      "commander": "^10.0.0",
      "enquirer": "^2.3.6",
      "typescript": "^5.0.2"
    },
    "readme": "<!-- infuser start title -->  \n# create-package  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nThis package has package templates and a scripts to help you kickstart new projects.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add create-package  \n```  \nNPM  \n```bash  \nnpm install create-package --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add create-package",
      "installNpm": "npm install create-package --save",
      "examples": []
    }
  },
  "data-fns": {
    "name": "data-fns",
    "version": "1.1.0",
    "author": "skulptur",
    "license": "MIT",
    "private": false,
    "description": "This library provides utility functions for working with array data that are useful in many contexts, including creative coding. It offers generic functions that perform common operations such as offsetting an array, generating an array based on a callback function, and chunking an array according to a pattern.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/data-fns",
    "module": "dist/data-fns.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "functional",
      "data",
      "structure",
      "native",
      "util",
      "helper"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why",
      "generate-docs": "ts-readme && markdown-toc -i ./README.md"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/data-fns.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/data-fns.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^4.10.2",
      "markdown-toc": "^1.2.0",
      "random-fns": "^0.1.8",
      "size-limit": "^4.10.2",
      "ts-readme": "^1.1.3",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "dependencies": {
      "unit-fns": "^0.1.6"
    },
    "readme": "<!-- infuser start title -->  \n# data-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nThis library provides utility functions for working with array data that are useful in many contexts, including creative coding. It offers generic functions that perform common operations such as offsetting an array, generating an array based on a callback function, and chunking an array according to a pattern.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add data-fns  \n```  \nNPM  \n```bash  \nnpm install data-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->  \n## Use  \nBrowser  \n```typescript  \nimport { times } from \"data-fns\";\n\nconsole.log(times(5, (index) => index * 2));\n  \n```  \n<!-- infuser end usage -->\n\n## Documentation\n\n<!-- toc -->\n\n- [`times` (function)](#times-function)\n- [`generateSequence` (function)](#generatesequence-function)\n- [`mapAt` (function)](#mapat-function)\n- [`getItem` (function)](#getitem-function)\n- [`cyclic` (function)](#cyclic-function)\n- [`palindrome` (function)](#palindrome-function)\n- [`modulo` (function)](#modulo-function)\n- [`CellularAutomataRuleset` (type)](#cellularautomataruleset-type)\n- [`BoundaryFunction` (type)](#boundaryfunction-type)\n- [`cellularAutomata` (function)](#cellularautomata-function)\n- [`euclideanSequencer` (function)](#euclideansequencer-function)\n- [`euclideanSilences` (function)](#euclideansilences-function)\n- [`TransitionMatrix` (type)](#transitionmatrix-type)\n- [`createTransitionMatrix` (function)](#createtransitionmatrix-function)\n- [`getNextState` (function)](#getnextstate-function)\n- [`markovSequence` (function)](#markovsequence-function)\n- [`patternChunks` (function)](#patternchunks-function)\n- [`binaryToIndices` (function)](#binarytoindices-function)\n- [`indicesToBinary` (function)](#indicestobinary-function)\n\n<!-- tocstop -->\n\n<!-- INSERT GENERATED DOCS START -->\n\n### `times` (function)\n\nCalls a callback function a specified number of times and returns the results in an array.\n\n**Parameters:**\n\n- iterations (`number`) - The number of times to call the callback function.\n- callback (`(index: number) => T`) - The callback function to call.\n\n```tsx\ntimes(5, (i) => i * 2)\n// Returns [0, 2, 4, 6, 8]\n```\n\n### `generateSequence` (function)\n\nGenerates a sequence of values by applying a given function to an initial value for a specified number of iterations.\n\n**Parameters:**\n\n- iterations (`number`) - The number of iterations to perform.\n- initialValue (`T`) - The initial value of the sequence.\n- iteratorFn (`(value: T) => T`) - The function to apply to the initial value and each subsequent value.\n\n```tsx\ngenerateSequence(5, 1, (value) => value * 2)\n// Returns [1, 2, 4, 8, 16]\n```\n\n### `mapAt` (function)\n\nMaps an item in an array at a specified index to a new value.\n\n**Parameters:**\n\n- array (`T[]`) - The array to map the item in.\n- index (`number`) - The index of the item to map.\n- mapFn (`(item: T) => T`) - A function that maps the item to a new value.\n\n```tsx\nconst originalArray = [1, 2, 3, 4, 5]\nconst mappedArray = mapAt(originalArray, 2, (item) => item * 2)\n// Returns [1, 2, 6, 4, 5]\n```\n\n### `getItem` (function)\n\nGets an item from an array based on a mapped index.\n\n**Parameters:**\n\n- index (`number`) - The index of the item to get.\n- array (`T[]`) - The array to get the item from.\n- indexMapFn (`(index: number, length: number) => number`) - A function that maps the index to a new index.\n\n```tsx\nconst array = ['a', 'b', 'c', 'd', 'e']\nconst indexMapFn = (index, length) => (index * 2) % length\ngetItem(2, array, indexMapFn)\n// Returns 'e'\n```\n\n### `cyclic` (function)\n\nMaps an index to a cyclic pattern.\n\n**Parameters:**\n\n- index (`number`) - The original index.\n- length (`number`) - The length of the sequence.\n\n```tsx\ncyclic(6, 5)\n// Returns 1\n```\n\n### `palindrome` (function)\n\nMaps an index to a palindrome pattern.\n\n**Parameters:**\n\n- index (`number`) - The original index.\n- length (`number`) - The length of the sequence.\n\n```tsx\nconst length = 5\nconst indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nindexes.map((index) => palindrome(index, length))\n// Returns [0, 1, 2, 1, 0, 1, 2, 1, 0, 1]\n```\n\n### `modulo` (function)\n\nReturns the remainder of dividing the dividend by the divisor, with support for negative dividends.\n\n**Parameters:**\n\n- dividend (`number`) - The dividend to divide.\n- divisor (`number`) - The divisor to divide by.\n\n```tsx\n// Basic usage\nmodulo(5, 3)\n// Returns 2\n\n// Support for negative dividends\nmodulo(-5, -3)\n// Returns 2\n\n// Support for negative divisors\nmodulo(-5, 3)\n// Returns -2\n\n// Support for negative dividends and divisors\nmodulo(5, -3)\n// Returns -2\n```\n\n### `CellularAutomataRuleset` (type)\n\n### `BoundaryFunction` (type)\n\n### `cellularAutomata` (function)\n\nGenerates a new sequence using a one-dimensional cellular automaton.\n\n**Parameters:**\n\n- sequence (`number[]`) - The initial sequence.\n- ruleset (`CellularAutomataRuleset`) - The ruleset for the cellular automaton.\n- boundaryFn (`BoundaryFunction`) - The boundary function to use.\n\n```tsx\ngenerateSequence(10, sequence, cellularAutomata)\n// Returns [\n//  [0, 0, 0, 0, 1, 0, 0, 0],\n//  [0, 0, 0, 1, 1, 1, 0, 0],\n//  [0, 0, 1, 1, 0, 0, 1, 0],\n//  [0, 1, 1, 0, 1, 1, 1, 1],\n//  [0, 1, 0, 0, 1, 0, 0, 0],\n//  [1, 1, 1, 1, 1, 1, 0, 0],\n//  [1, 0, 0, 0, 0, 0, 1, 1],\n//  [0, 1, 0, 0, 0, 1, 1, 0],\n//  [1, 1, 1, 0, 1, 1, 0, 1],\n//  [0, 0, 0, 0, 1, 0, 0, 1],\n// ]\n```\n\n### `euclideanSequencer` (function)\n\nGenerates a Euclidean rhythm sequence.\n\n**Parameters:**\n\n- steps (`number`) - The number of steps in the sequence.\n- notes (`number`) - The number of notes in the sequence.\n- rotation (`number`) - The rotation of the sequence (default: 0).\n\n```tsx\neuclideanSequencer(8, 3, 1)\n// Returns [1, 3, 6]\n```\n\n### `euclideanSilences` (function)\n\nGenerates a sequence of indices representing the \"silences\" (i.e. rests) in a Euclidean rhythm.\n\n**Parameters:**\n\n- steps (`number`) - The number of steps in the rhythm.\n- notes (`number`) - The number of notes in the rhythm.\n- rotation (`number`) - The rotation of the rhythm (default: 0).\n\n```tsx\neuclideanSilences(8, 3)\n// Returns [1, 3, 4, 6, 7]\n```\n\n### `TransitionMatrix` (type)\n\n### `createTransitionMatrix` (function)\n\nCreates a transition matrix from an array of numbers.\n\n**Parameters:**\n\n- data (`number[]`) - The array of numbers to create the transition matrix from.\n\n### `getNextState` (function)\n\nGets the next state based on the current state and the transition matrix.\n\n**Parameters:**\n\n- currentState (`number`) - The current state.\n- transitionMatrix (`TransitionMatrix`) - The transition matrix.\n\n### `markovSequence` (function)\n\nGenerates a sequence of numbers based on the input data and length.\n\n**Parameters:**\n\n- data (`number[]`) - The input data to generate the sequence from.\n- length (`number`) - The length of the sequence to generate.\n\n### `patternChunks` (function)\n\nSplits an array into chunks based on a pattern.\n\n**Parameters:**\n\n- array (`T[]`) - The array to split.\n- pattern (`number[]`) - The pattern to split the array with.\n\n```tsx\npatternChunks([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3])\n// Returns [[1], [2, 3], [4, 5, 6], [7], [8]]\n```\n\n### `binaryToIndices` (function)\n\nConverts an array of binary digits to an array of indices where the digit is 1.\n\n**Parameters:**\n\n- binary (`number[]`) - An array of binary digits (0 or 1).\n\n```tsx\nbinaryToIndices([1, 0, 1, 1, 0, 1])\n// Returns [0, 2, 3, 5]\n\nbinaryToIndices([1, 1, 1, 1, 1])\n// Returns [0, 1, 2, 3, 4]\n\nbinaryToIndices([0, 0, 0, 0, 0])\n// Returns []\n```\n\n### `indicesToBinary` (function)\n\nConverts an array of indices to a binary array where the indices are 1 and the other digits are 0.\n\n**Parameters:**\n\n- indices (`number[]`) - An array of indices.\n- length (`number`) - The length of the binary array to be returned.\n\n```tsx\n// Basic usage\nindicesToBinary([0, 2, 4], 5)\n// Returns [1, 0, 1, 0, 1]\n\n// Ignoring negative indices\nindicesToBinary([0, -1, 2, -2, 4], 5)\n// Returns [1, 0, 1, 0, 1]\n\n// Indices outside range are ignored\nindicesToBinary([0, 2, 4, 6], 5)\n// Returns [1, 0, 1, 0, 1]\n```\n\n<!-- INSERT GENERATED DOCS END -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add data-fns",
      "installNpm": "npm install data-fns --save",
      "examples": [
        {
          "name": "Browser",
          "content": "import { times } from \"data-fns\";\n\nconsole.log(times(5, (index) => index * 2));\n"
        }
      ]
    }
  },
  "docs": {
    "name": "docs",
    "version": "0.1.0",
    "private": true,
    "description": "Documentation pages for multiple libraries developed by skulptur.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/docs",
    "license": "MIT",
    "keywords": [
      "TypeScript",
      "Documentation",
      "Examples",
      "Libraries",
      "Code",
      "API",
      "Development",
      "Programming",
      "Learning",
      "Reference"
    ],
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "@emotion/react": "^11.10.6",
      "@mantine/carousel": "^6.0.4",
      "@mantine/core": "^6.0.4",
      "@mantine/dates": "^6.0.4",
      "@mantine/dropzone": "^6.0.4",
      "@mantine/form": "^6.0.4",
      "@mantine/hooks": "^6.0.4",
      "@mantine/modals": "^6.0.4",
      "@mantine/notifications": "^6.0.4",
      "@mantine/nprogress": "^6.0.4",
      "@mantine/prism": "^6.0.4",
      "@mantine/spotlight": "^6.0.4",
      "@mantine/tiptap": "^6.0.4",
      "@tabler/icons-react": "^2.11.0",
      "@tanstack/react-query": "^4.26.1",
      "@tiptap/extension-link": "^2.0.0-beta.220",
      "@tiptap/react": "^2.0.0-beta.220",
      "@tiptap/starter-kit": "^2.0.0-beta.220",
      "@types/node": "18.15.10",
      "@types/react": "18.0.29",
      "@types/react-dom": "18.0.11",
      "dayjs": "^1.11.7",
      "embla-carousel-react": "^7.1.0",
      "eslint": "8.36.0",
      "eslint-config-next": "13.2.4",
      "next": "13.2.4",
      "react": "18.2.0",
      "react-dom": "18.2.0",
      "rehype-react": "^7.1.2",
      "remark": "^14.0.2",
      "remark-rehype": "^10.1.0",
      "typescript": "5.0.2",
      "unified": "^10.1.2",
      "color-supreme": "*",
      "infuser": "*",
      "perfect-time": "*",
      "common-fns": "*",
      "karabiner-ts": "*",
      "pixel-paradise": "*",
      "concat-ts": "*",
      "kween": "*",
      "random-fns": "*",
      "copilot-x": "*",
      "lightcast": "*",
      "reactive-fns": "*",
      "create-package": "*",
      "loop-fns": "*",
      "unit-fns": "*",
      "data-fns": "*",
      "markdown-fns": "*",
      "uplifter": "*",
      "docs": "*",
      "note-fns": "*"
    },
    "readme": "This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.\n\n[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.\n\nThe `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.\n\nThis project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.\n",
    "usage": {
      "installYarn": "yarn add docs",
      "installNpm": "npm install docs --save",
      "examples": []
    }
  },
  "infuser": {
    "name": "infuser",
    "private": false,
    "version": "0.0.2",
    "description": "If you're looking for an easy way to extract or update dynamic content within static files, this library has got you covered! With `getSlots`, you can quickly extract the content of slots or placeholders within your files. And with `updateSlots`, you can effortlessly replace the content of these slots with new content. Say goodbye to the hassle of manually updating static files with dynamic content. Let `infuser` do the heavy lifting for you and streamline your workflow like never before!",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/infuser",
    "keywords": [
      "update",
      "insert",
      "replace",
      "template",
      "static",
      "dynamic",
      "content",
      "typescript",
      "cli"
    ],
    "license": "MIT",
    "main": "./dist/index.js",
    "bin": "./dist/cli.js",
    "exports": {
      ".": "./dist/index.js",
      "./node": "./dist/node/index.js"
    },
    "files": [
      "dist/**/*"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skulptur.git"
    },
    "scripts": {
      "dev": "ts-node ./src/cli.ts",
      "clean": "rimraf ./dist/ ./exec/",
      "build": "npm run clean && tsc",
      "bundle": "npm run build && pkg . --out-dir ./exec/",
      "test": "jest"
    },
    "devDependencies": {
      "@types/jest": "^29.5.0",
      "@types/node": "^18.15.5",
      "jest": "^29.5.0",
      "pkg": "^5.8.1",
      "rimraf": "^2.6.3",
      "ts-jest": "^29.0.5",
      "ts-node": "^10.9.1"
    },
    "dependencies": {
      "commander": "^10.0.0",
      "typescript": "^5.0.2"
    },
    "readme": "<!-- infuser start title -->  \n# infuser  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nIf you're looking for an easy way to extract or update dynamic content within static files, this library has got you covered! With `getSlots`, you can quickly extract the content of slots or placeholders within your files. And with `updateSlots`, you can effortlessly replace the content of these slots with new content. Say goodbye to the hassle of manually updating static files with dynamic content. Let `infuser` do the heavy lifting for you and streamline your workflow like never before!  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add infuser  \n```  \nNPM  \n```bash  \nnpm install infuser --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\nNode\n\n```typescript\nimport { updateFile, SlotUpdate } from \"infuser\";\n\nconst filePath = \"./example.html\";\nconst updates: Array<SlotUpdate> = [\n  {\n    slotName: \"header\",\n    newContent: \"<h1>New header content</h1>\",\n  },\n  {\n    slotName: \"footer\",\n    newContent: \"<p>New footer content</p>\",\n  },\n];\n\nupdateFile(filePath, updates)\n  .then(() => {\n    console.log(\"File successfully updated\");\n  })\n  .catch((error) => {\n    console.error(\"An error occurred:\", error);\n  });\n```\n\n### File structure\n\nInfuser library uses special comments to identify slots in a file. Here's an example of how the file should look like:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <!-- infuser start my-header -->\n    <h1>Original header content</h1>\n    <!-- infuser end my-header -->\n\n    <div>\n      <p>Content not inside a slot remains unchanged.</p>\n    </div>\n\n    <!-- infuser start my-footer -->\n    <p>Original footer content</p>\n    <!-- infuser end my-footer -->\n  </body>\n</html>\n```\n\nIn this example, there are two slots: header and footer. When the updateFile function is called, the content between &lt;!-- infuser start header --&gt; and &lt;!-- infuser end header --&gt;, and &lt;!-- infuser start footer --&gt; and &lt;!-- infuser end footer --&gt; will be replaced with the new content specified in the updates array.\n\nInfuser supports some common file formats out of the box, and you can specify the comment style for files it does not recognize.\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add infuser",
      "installNpm": "npm install infuser --save",
      "examples": []
    }
  },
  "karabiner-ts": {
    "name": "karabiner-ts",
    "version": "0.1.0",
    "author": "skulptur",
    "private": false,
    "description": "A typescript library that makes it easy to generate karabiner configurations.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/karabiner-ts",
    "license": "MIT",
    "module": "dist/karabiner-ts.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "functional"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "husky": {
      "hooks": {
        "pre-commit": "tsdx lint"
      }
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/karabiner-ts.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/karabiner-ts.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^4.10.2",
      "husky": "^6.0.0",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "dependencies": {
      "@types/lodash.castarray": "^4.4.6",
      "lodash.castarray": "^4.4.0"
    },
    "readme": "<!-- infuser start title -->  \n# karabiner-ts  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nA typescript library that makes it easy to generate karabiner configurations.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add karabiner-ts  \n```  \nNPM  \n```bash  \nnpm install karabiner-ts --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add karabiner-ts",
      "installNpm": "npm install karabiner-ts --save",
      "examples": []
    }
  },
  "kween": {
    "version": "0.1.1",
    "license": "MIT",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "name": "kween",
    "private": false,
    "author": "skulptur",
    "description": "Simple tween library written in Typescript",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/kween",
    "keywords": [
      "tween",
      "typescript",
      "functional",
      "ease",
      "gsap"
    ],
    "module": "dist/kween.esm.js",
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "check:compilation": "tsc --noEmit"
    },
    "husky": {
      "hooks": {
        "pre-commit": "tsdx lint && tsc --noEmit"
      }
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "devDependencies": {
      "@types/jest": "^25.2.1",
      "husky": "^4.2.5",
      "tsdx": "^0.13.1",
      "tslib": "^1.11.1",
      "typescript": "^3.8.3",
      "kween": "*"
    },
    "dependencies": {
      "lib": "^4.1.2"
    },
    "readme": "<p align=\"center\">\n  <img alt=\"kween-logo\" src=\"https://github.com/skulptur/kween/blob/master/kween-logo.png?raw=true\" width=\"350\">\n</p>\n\n<!-- infuser start description -->  \nSimple tween library written in Typescript  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add kween  \n```  \nNPM  \n```bash  \nnpm install kween --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->  \n## Use  \nBrowser  \n```typescript  \nimport { tween, bounceInOut } from 'kween'\n\ntween({\n  duration: 1000, // in milliseconds\n  ease: bounceInOut,\n  onUpdate: (value, progress) => {\n    // value is eased, progress is linear\n    console.log(value, progress)\n  },\n})\n  \n```  \n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add kween",
      "installNpm": "npm install kween --save",
      "examples": [
        {
          "name": "Browser",
          "content": "import { tween, bounceInOut } from 'kween'\n\ntween({\n  duration: 1000, // in milliseconds\n  ease: bounceInOut,\n  onUpdate: (value, progress) => {\n    // value is eased, progress is linear\n    console.log(value, progress)\n  },\n})\n"
        }
      ]
    }
  },
  "lightcast": {
    "name": "lightcast",
    "version": "0.1.6",
    "author": "skulptur",
    "description": "The Pub/Sub pattern is needed every now and then and this library is a no dependency, tiny and typesafe solution.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/lightcast",
    "license": "MIT",
    "private": false,
    "module": "dist/lightcast.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "publish",
      "subscribe",
      "pubsub",
      "functional"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skultpur/tree/main/packages/lightcast"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "husky": {
      "hooks": {
        "pre-commit": "tsdx lint"
      }
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/lightcast.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/lightcast.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^7.0.8",
      "husky": "^7.0.4",
      "size-limit": "^7.0.8",
      "tsdx": "^0.14.1",
      "tslib": "^2.4.0",
      "typescript": "^4.6.3"
    },
    "dependencies": {},
    "readme": "<!-- infuser start title -->  \n# lightcast  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nThe Pub/Sub pattern is needed every now and then and this library is a no dependency, tiny and typesafe solution.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add lightcast  \n```  \nNPM  \n```bash  \nnpm install lightcast --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport { createPubSub } from 'lightcast'\n\n// create\nconst pubSub = createPubSub<string>()\n\n// subscribe anywhere in your app\npubSub.subscribe(console.log)\npubSub.subscribe(console.log)\n\n// dispatch\npubSub.dispatch('hello world')\n```\n\nWorking with groups\n\n```typescript\n// say you have a piece of code that accepts callbacks for events\nconst loader = createLoader({\n  onProgress: (progress) => console.log(progress),\n  onComplete: () => console.log('done'),\n})\n```\n\n```typescript\nimport { createPubSub } from 'lightcast'\n\nconst pubSub = {\n  onProgress: createPubSub<number>(),\n  onComplete: createPubSub<void>(),\n}\n\n// you could make it work like this...\nconst loader = createLoader({\n  onProgress: pubSub.onProgress.dispatch,\n  onComplete: pubSub.onComplete.dispatch,\n  // ...\n})\n```\n\n```typescript\nimport { createPubSub, groupByAction } from 'lightcast'\n\n// but it is easier to group by dispatch/subscribe/dispose\nconst pubSub = groupByAction({\n  onProgress: createPubSub<number>(),\n  onComplete: createPubSub<void>(),\n})\n\nconst loader = createLoader({\n  ...pubSub.dispatch,\n  // ...\n})\n```\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add lightcast",
      "installNpm": "npm install lightcast --save",
      "examples": []
    }
  },
  "loop-fns": {
    "name": "loop-fns",
    "version": "0.1.3",
    "author": "skulptur",
    "description": "A lightweight solution for looping with great performance and control.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/loop-fns",
    "license": "MIT",
    "private": false,
    "module": "dist/loop-fns.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "functional"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/loop-fns.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/loop-fns.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^7.0.8",
      "size-limit": "^7.0.8",
      "tsdx": "^0.14.1",
      "tslib": "^2.4.0",
      "typescript": "^4.6.3"
    },
    "readme": "<!-- infuser start title -->  \n# loop-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nA lightweight solution for looping with great performance and control.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add loop-fns  \n```  \nNPM  \n```bash  \nnpm install loop-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport { loopFrames } from 'loop-fns'\n\nconst props = loopFrames((props) => {\n  // your graphics update logic...\n\n  // you can also control the loop within the callback\n  if (props.currentFrame === 10) {\n    props.stop()\n  }\n}, 30) // limit to 30fps\n\nprops.start()\n```\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add loop-fns",
      "installNpm": "npm install loop-fns --save",
      "examples": []
    }
  },
  "markdown-fns": {
    "version": "0.1.2",
    "license": "MIT",
    "main": "dist/index.js",
    "private": false,
    "description": "Markdown is meant for humans to type, but isn't any good when you want to abstract patterns that often appear in documentation. With the functions provided by markdown-fns it is not only possible but also very easy to do so.",
    "typings": "dist/index.d.ts",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/markdown-fns",
    "keywords": [
      "markdown",
      "functional",
      "fp",
      "utilities",
      "utils",
      "react"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build"
    },
    "prettier": {
      "printWidth": 80,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5"
    },
    "name": "markdown-fns",
    "author": "Gustavo Spredemann",
    "module": "dist/markdown-fns.esm.js",
    "devDependencies": {
      "concat-ts": "^0.0.8",
      "tsdx": "^0.13.2",
      "tslib": "^2.0.0",
      "typescript": "^3.9.7"
    },
    "dependencies": {
      "data-fns": "*"
    },
    "readme": "Warning: This is a work in progress and the API isn't currently stable yet!\n\n<!-- infuser start title -->  \n# markdown-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nMarkdown is meant for humans to type, but isn't any good when you want to abstract patterns that often appear in documentation. With the functions provided by markdown-fns it is not only possible but also very easy to do so.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add markdown-fns  \n```  \nNPM  \n```bash  \nnpm install markdown-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport {\n  bold,\n  heading,\n  inlineCode,\n  italic,\n  lines,\n  link,\n  ordered,\n  spaces,\n  strike,\n  times,\n  unordered,\n} from 'markdown-fns'\n\nconst exampleUrl =\n  'https://github.com/skulptur/markdown-fns/tree/master/example'\nconst fruits = ['Apples', 'Oranges', 'Bananas']\n\nconst markdown = lines([\n  lines(times(index => heading(index + 1, 'This is a heading.'), 6)),\n  'This is regular text.',\n  italic('Italic text.'),\n  bold('Bold text.'),\n  strike('Strike through text.'),\n  lines([\n    'More regular text.',\n    spaces(['Text and', inlineCode('inline code'), '.']),\n    'and then some more text.',\n  ]),\n  ordered(fruits),\n  unordered(fruits),\n  link('example', exampleUrl),\n]) // output below!\n```\n\n# This is a heading.\n\n## This is a heading.\n\n### This is a heading.\n\n#### This is a heading.\n\n##### This is a heading.\n\n###### This is a heading.\n\nThis is regular text.\n\n**_Italic text._**\n\n**Bold text.**\n\n~~Strike through text.~~\n\nThis is regular text.\n\nText and `inline code`.\n\nand then some more text.\n\n1. Apples\n2. Oranges\n3. Bananas\n\n- Apples\n- Oranges\n- Bananas\n\n[example](https://github.com/skulptur/markdown-fns/tree/master/example)\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add markdown-fns",
      "installNpm": "npm install markdown-fns --save",
      "examples": []
    }
  },
  "note-fns": {
    "name": "note-fns",
    "author": "skulptur",
    "version": "0.2.1",
    "description": "Use this library when you need a comprehensive but lightweight solution for working with musical notes in Typescript. It provides functions, types and constants that make it easy to manipulate musical note information. Works great in conjunction with other music related libraries.",
    "license": "MIT",
    "private": false,
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/note-fns",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "music",
      "note",
      "theory",
      "scales",
      "intervals",
      "modes",
      "functional"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why",
      "upload": "yarn build && npm publish"
    },
    "peerDependencies": {
      "react": ">=16"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "module": "dist/musical-fns.esm.js",
    "size-limit": [
      {
        "path": "dist/musical-fns.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/musical-fns.esm.js",
        "limit": "10 KB"
      }
    ],
    "dependencies": {
      "music-fns": "^0.1.3",
      "range-fns": "^0.1.5"
    },
    "devDependencies": {
      "@size-limit/preset-small-lib": "^4.9.1",
      "size-limit": "^4.9.1",
      "tsdx": "^0.14.1",
      "tslib": "^2.1.0",
      "type-fest": "^1.0.2",
      "typescript": "^4.1.3"
    },
    "readme": "<!-- infuser start title -->  \n# note-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nUse this library when you need a comprehensive but lightweight solution for working with musical notes in Typescript. It provides functions, types and constants that make it easy to manipulate musical note information. Works great in conjunction with other music related libraries.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add note-fns  \n```  \nNPM  \n```bash  \nnpm install note-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport { getNote } from 'note-fns'\n\nconsole.log(getNote('A#4')) // 'A#'\n```\n\n## API\n\n### Types\n\n```typescript\nimport { Opaque } from 'type-fest'\n\nexport type Root = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'\nexport type SharpNote = 'B#' | 'C#' | 'D#' | 'E#' | 'F#' | 'G#' | 'A#'\nexport type FlatNote = 'Db' | 'Eb' | 'Fb' | 'Gb' | 'Ab' | 'Bb' | 'Cb'\nexport type NoteName = Root | SharpNote | FlatNote\n\nexport type NoteDescription = {\n  root: NoteName\n  accidental?: Accidental\n  accidentalType?: AccidentalType\n  octave?: Octave\n}\n\nexport type Direction = 1 | -1\nexport type Accidental = 'SHARP' | 'FLAT' | ''\nexport type AccidentalType = 'LETTER' | 'SYMBOL' | ''\nexport type Octave = number\n\nexport type ScientificNote = string\nexport type Interval = number\n\nexport type Scale = ReadonlyArray<NoteName>\nexport type Chord = ReadonlyArray<NoteName>\n\nexport type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11\nexport type Hertz = Opaque<number, 'Hertz'>\nexport type Midi = Opaque<number, 'Midi'>\n```\n\n### Functions\n\nThese are from [music-fns](https://github.com/madewithlove/music-fns), but with typescript types.\n\n- `accidentalToLetter`: Converts a note which has an accidental as a symbol (♭, ♯) to a note with the accidental as a letter (b, #).\n- `accidentalToSymbol`: Converts a note which has an accidental as a letter (b, #) to a note with the accidental as a symbol (♭, ♯).\n- `areEqual`: Returns true if the provided notes are the same notes.\n- `createChord`: Creates a chord by providing a root note and intervals (use Chords).\n- `createMelody`: Creates a melody using a provided array of notes and a pattern.\n- `createScale`: Creates a scale (or mode) by providing a root note and an intervals (use the Scale or Mode constant).\n- `flatToSharp`: Converts a flat to its sharp equivalent, this function preserves the accidental style (letter or symbol).\n- `getAccidental`: Returns the accidental (or undefined) from a note.\n- `getChromaticCPosition`: Returns the (0-indexed) position of the specific root within a chromatic C scale (equals the NOTES constant).\n- `getDominant`: Returns the note on scale degree 5 in a diatonic scale.\n- `getIntervals`: Returns one or more intervals between the provided notes.\n- `getLeadingTone`: Returns the note on scale degree 7 in a diatonic scale.\n- `getMediant`: Returns the note on scale degree 3 in a diatonic scale.\n- `getNote`: Returns the full note (note + accidental) from a note.\n- `getNoteOnDegree`: Returns the note on the provided scale degree.\n- `getOctave`: Returns the octave information (or undefined) from a note.\n- `getRoot`: Returns the root (only note, no accidental) from a note.\n- `getSubdominant`: Returns the note on scale degree 4 in a diatonic scale.\n- `getSubmediant`: Returns the note on scale degree 6 in a diatonic scale.\n- `getSupertonic`: Returns the note on scale degree 2 in a diatonic scale.\n- `getTonic`: Returns the note on scale degree 1 in a diatonic scale.\n- `normalize`: Normalize a scale by making sure it's ascending & has a root end.\n- `noteToFrequency`: Converts a note to a frequency (in Hz). You can use a different base frequency for A4 via standard.\n- `noteToMidi`: Converts a note to its MIDI number. C4 = 60 in our implementation. You can provide a different middle C via standard.\n- `noteToNoteDescription`: Converts a note to an object describing it.\n- `noteDescriptionToNote`: Converts an object describing to a note.\n- `sharpToFlat`: Converts a sharp to its flat equivalent, this function preserves the accidental style (letter or symbol).\n- `transferAccidental`: Transfer the accidental type (flat or sharp) from a provided reference note\n- `transferStyle`: Combination of transferAccidental and transferAccidentalStyle.\n- `transpose`: Transpose a note by a specific interval (use the Interval constant). An interval can also be negative.\n\n##### Predicates\n\n- `areEqual`: Returns true if the provided notes are the same notes.\n- `areIntervals`: Returns true if the provided numbers are intervals.\n- `areNotes`: Returns true if the provided notes are notes.\n- `hasAccidental`: Returns true if the note has an accidental as a symbol (♭, ♯).\n- `hasAccidentalLetter`: Returns true if the note has an accidental as a letter (b, #).\n- `hasAccidentalSymbol`: Returns true if the note has an accidental as a symbol (♭, ♯).\n- `hasIntervalAmount`: Returns true if a scale has the provided interval amount.\n- `hasOctave`: Returns true if the note has octave information.\n- `haveSameOctave`: Returns true if all notes share the same octave information.\n- `isAnhemitonic`: Returns true if the scale is anhemitonic (does not contain semitones).\n- `isAscending`: Returns true if the scale is ascending.\n- `isCohemitonic`: Returns true if the scale is cohemitonic (contains 2 or more semitones that appear consecutively in scale order).\n- `isDescending`: Returns true if the scale is descending.\n- `isDiatonic`: Returns true if the scale is diatonic (5 tones & 2 semitones, where the semitones are separated at least 2 steps from each other).\n- `isFifth`: Returns true if the interval is a fifth (diminished, perfect or augmented) (6, 7, 8).\n- `isFlat`: Returns true if the note is flat (b, ♭).\n- `isHemitonic`: Returns true if the scale is hemitonic (contains 1 or more semitones).\n- `isHeptatonic`: Returns true if the scale is heptatonic (7 notes per octave).\n- `isHexatonic`: Returns true if the scale is hexatonic (6 notes per octave).\n- `isMode`: Returns true when the provided array of notes is a mode (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian or Locrian).\n- `isNatural`: Returns true if the note is natural (no accidental).\n- `isNote`: Returns true if the provided value is a valid note in scientific pitch notation.\n- `isOctatonic`: Returns true if the scale is octatonic (8 notes per octave).\n- `isOctave`: Returns true if the interval is an octave (12).\n- `isPentatonic`: Returns true if the scale is pentatonic (5 notes per octave).\n- `isScale`: Returns true when the array of notes is a scale.\n- `isSemitone`: Returns true if the interval is a semitone (1).\n- `isSharp`: Returns true if the note is sharp (#, ♯).\n- `isTone`: Returns true if the interval is a tone (2).\n- `isTriad`: Returns true if the chord is a triad (a set of three notes that can be stacked in thirds).\n\n### Scales\n\nNote-fns exports each scale individually as well as an object `Scales` containing all of them. Example:\n\n```typescript\nimport { Scales, naturalMinorScale } from 'note-fns'\n\nconsole.log(Scales.naturalMinor)\nconsole.log(naturalMinorScale)\n```\n\nIncluded scales:\n\n- `algerian`: Intervals = [2, 1, 2, 1, 1, 1, 3, 1];\n- `altered`: Intervals = [1, 2, 1, 2, 2, 2, 2];\n- `arabic`: Intervals = [1, 3, 1, 2, 1, 3, 1];\n- `augmented`: Intervals = [3, 1, 3, 1, 3, 1];\n- `balinese`: Intervals = [1, 2, 4, 1, 4];\n- `blues`: Intervals = [3, 2, 1, 1, 3, 2];\n- `byzantine`: Intervals = [1, 3, 1, 2, 1, 3, 1];\n- `chinese`: Intervals = [4, 2, 1, 4, 1];\n- `chromatic`: Intervals = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];\n- `doubleHarmonic`: Intervals = [1, 3, 1, 2, 1, 3, 1];\n- `enigmatic`: Intervals = [1, 3, 2, 2, 2, 1, 1];\n- `gypsyMajor`: Intervals = [1, 3, 1, 2, 1, 3, 1];\n- `harmonicMinor`: Intervals = [2, 1, 2, 2, 1, 3, 1];\n- `hirajoshi`: Intervals = [1, 4, 1, 4, 2];\n- `inSen`: Intervals = [1, 4, 2, 3, 2];\n- `japanese`: Intervals = [1, 4, 2, 3, 2];\n- `majorPentatonic`: Intervals = [2, 2, 3, 2, 3];\n- `major`: Intervals = [2, 2, 1, 2, 2, 2, 1];\n- `melodicMinor`: Intervals = [2, 1, 2, 2, 2, 2, 1];\n- `minorPentatonic`: Intervals = [3, 2, 2, 3, 2];\n- `mongolian`: Intervals = [2, 2, 3, 2, 3];\n- `naturalMinor`: Intervals = [2, 1, 2, 2, 1, 2, 2];\n- `pelog`: Intervals = [1, 2, 4, 1, 4];\n- `prometheus`: Intervals = [2, 2, 2, 3, 1, 2];\n- `wholeTone`: Intervals = [2, 2, 2, 2, 2, 2];\n- `yo`: Intervals = [2, 3, 2, 2, 3];\n\n### Modes\n\nSimilarly as with scales, note-fns exports the constants directly as well as an object `Modes` containing all of them. Example:\n\n```typescript\nimport { Modes, phrygianMode } from 'note-fns'\n\nconsole.log(Modes.phrygian)\nconsole.log(phrygianMode)\n```\n\nIncluded Modes:\n\n- `ionian`: Intervals = [2, 2, 1, 2, 2, 2, 1]\n- `dorian`: Intervals = [2, 1, 2, 2, 2, 1, 2]\n- `phrygian`: Intervals = [1, 2, 2, 2, 1, 2, 2]\n- `lydian`: Intervals = [2, 2, 2, 1, 2, 2, 1]\n- `mixolydian`: Intervals = [2, 2, 1, 2, 2, 1, 2]\n- `aeolian`: Intervals = [2, 1, 2, 2, 1, 2, 2]\n- `locrian`: Intervals = [1, 2, 2, 1, 2, 2, 2]\n\n### Intervals\n\nAll interval consts are also exported individually, as well as with a short version and an object `Intervals` containing both short and regular names. Example:\n\n```typescript\nimport { Intervals, perfectFithInterval, P5 } from 'note-fns'\n\nconsole.log(Intervals.perfectFith)\nconsole.log(perfectFithInterval)\nconsole.log(P5)\n```\n\nIncluded intervals:\n\n##### short\n\n- `root` / `R`: Interval = 0\n- `semitone` / `S`: Interval = 1\n- `tone` / `T`: Interval = 2\n- `tritone` / `TT`: Interval = 6\n- `octave` / `O`: Interval = 12\n\n##### minor / major\n\n- `perfectUnison` / `P1`: Interval = 0\n- `minorSecond` / `m2`: Interval = 1\n- `majorSecond` / `M2`: Interval = 2\n- `minorThird` / `m3`: Interval = 3\n- `majorThird` / `M3`: Interval = 4\n- `perfectFourth` / `P4`: Interval = 5\n- `perfectFifth` / `P5`: Interval = 7\n- `minorSixth` / `m6`: Interval = 8\n- `majorSixth` / `M6`: Interval = 9\n- `minorSeventh` / `m7`: Interval = 10\n- `majorSeventh` / `M7`: Interval = 11\n- `perfectOctave` / `P8`: Interval = 12\n\n##### augmented / diminished\n\n- `diminishedSecond` / `d2`: Interval = 0\n- `augmentedUnison` / `A1`: Interval = 1\n- `diminishedThird` / `d3`: Interval = 2\n- `augmentedSecond` / `A2`: Interval = 3\n- `diminishedFourth` / `d4`: Interval = 4\n- `augmentedThird` / `A3`: Interval = 5\n- `diminishedFifth` / `d5`: Interval = 6\n- `augmentedFourth` / `A4`: Interval = 6\n- `diminishedSixth` / `d6`: Interval = 7\n- `augmentedFifth` / `A5`: Interval = 8\n- `diminishedSeventh` / `d7`: Interval = 9\n- `augmentedSixth` / `A6`: Interval = 10\n- `diminishedEighth` / `d8`: Interval = 11\n- `diminishedOctave`: Interval = 11\n- `augmentedSeventh` / `A7`: Interval = 12\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add note-fns",
      "installNpm": "npm install note-fns --save",
      "examples": []
    }
  },
  "perfect-time": {
    "name": "perfect-time",
    "version": "0.2.0",
    "description": "A generic clock that makes it easy to schedule repeating time based events with precision in Typescript. It works by calling scheduled events slightly before their side effects should take place, which is great in combination with Web Audio for example.",
    "author": "skulptur",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/perfect-time",
    "license": "MIT",
    "private": false,
    "module": "dist/perfect-time.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "clock",
      "time",
      "scheduling",
      "web audio",
      "sequencer"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/perfect-time"
    },
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "prettier": {
      "printWidth": 120,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/perfect-time.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/perfect-time.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^7.0.8",
      "size-limit": "^7.0.8",
      "tsdx": "^0.14.1",
      "tslib": "^2.4.0",
      "typescript": "^4.6.3"
    },
    "dependencies": {
      "audio-fns": "^0.3.2",
      "lightcast": "^0.1.5"
    },
    "readme": "<!-- infuser start title -->  \n# perfect-time  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nA generic clock that makes it easy to schedule repeating time based events with precision in Typescript. It works by calling scheduled events slightly before their side effects should take place, which is great in combination with Web Audio for example.  \n<!-- infuser end description -->\n\nThis essentially allows you to circumvent [issues with javascript timers](https://www.html5rocks.com/en/tutorials/audio/scheduling/).\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add perfect-time  \n```  \nNPM  \n```bash  \nnpm install perfect-time --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport { createClock, createSetIntervalTicker } from 'perfect-time'\n\n// Any object with updating currentTime will do (make sure it is resumed)\nconst context = new AudioContext()\n\nconst clock = createClock({\n  context,\n  // The ticker is what periodically runs the check for events.\n  // Ideally you would use a ticker in another thread but here\n  // we tick on the same thread every 100ms using setInterval.\n  ticker: createSetIntervalTicker(100),\n})\n\nplayer.start()\n\nclock\n  .every(1, (event) => {\n    // AudioContext.currentTime is in seconds\n    console.log('every second:', event.count)\n  })\n  .limit(10) // clear event after 10 times!\n```\n\n## API\n\nThe clock works with user or library provided \"tickers\" that can run on a separate thread. The events have a time tolerance in which they must get executed or else they get dropped. You can tweak the early and late tolerance to suit your application.\n\n- Early: too high and there might be a noticeable lag between state is reflected in the side effects (say a knob move to cause a change in sound).\n- Late: too high and events might actually start getting executed past their time.\n\nNote that AudioContext is used just for the sake of the examples as the clock is generic and can work with any `{ currentTime: number }`.\n\n**Create a clock**\n\n```typescript\nimport { createClock, createScriptProcessorTicker } from 'perfect-time'\n\nconst clock = createClock({\n  // For audio you'll want to pass AudioContext.\n  context: audioContext,\n  // This one actually needs to receive an AudioContext as it uses ScriptProcessorNode internally\n  ticker: createScriptProcessorTicker(audioContext),\n})\n```\n\n**Schedule Events**\n\n```typescript\nconst callback = (event) => {\n  // use event.time to schedule precisely (for example using AudioContext)\n  oscNode.start(event.time)\n}\n\n// callback gets called right before context.currentTime reaches 10 seconds\nplayer.atTime(10, callback)\n\n// callback gets called immediately and and repeats every 10 seconds\nplayer.every(10, callback)\n\n// callback gets called right before 10 seconds elapsed\nplayer.setTimeout(10, callback)\n\n// callback gets called right before 10 seconds elapsed and repeats\nplayer.setInterval(10, callback)\n```\n\n**Control Events**\n\nYou can also control the event directly, for example to schedule repetition in the future or limiting repeats.\n\n```typescript\n// callback called right before context.currentTime reaches 10, and then every second 3 times\n// player.atTime returns an event, which we call .repeat on\nplayer.atTime(10, callback).repeat(1, 3)\n\n// equivalent to the above\nclock\n  .atTime(10, callback)\n  .repeat(1)\n  .limit(3)\n```\n\n**Cancel Events**\n\n```typescript\n// start an oscillator node at context.currentTime = 1\nconst event = player.every(1, (event) => {\n  oscNode.start(event.time)\n})\n\n// nevermind\nevent.clear()\n```\n\n**Change speed of a group of events**\n\n```typescript\nconst eventA = player.atTime(1, () => console.log('event A')).repeat(3)\nconst eventB = player.atTime(2, () => console.log('event B')).repeat(3)\nconst eventC = player.atTime(3, () => console.log('event C')).repeat(3)\n\n// the speed will be halved immediately for all events\nplayer.timeStretch(0.5)\n\n// the speed will be doubled in 9 seconds only for eventA and eventB\nplayer.setTimeout(9, (event) => {\n  player.timeStretch(2, event.time, [eventA, eventB])\n})\n```\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add perfect-time",
      "installNpm": "npm install perfect-time --save",
      "examples": []
    }
  },
  "pixel-paradise": {
    "name": "pixel-paradise",
    "description": "Image manipulation library.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/pixel-paradise",
    "private": false,
    "version": "0.0.0",
    "author": "skulptur",
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skultpur.git"
    },
    "type": "module",
    "keywords": [],
    "files": [
      "dist"
    ],
    "main": "./dist/pixel-paradise.umd.cjs",
    "module": "./dist/pixel-paradise.js",
    "types": "./dist/index.d.ts",
    "exports": {
      ".": {
        "import": "./dist/pixel-paradise.js",
        "require": "./dist/pixel-paradise.umd.cjs"
      }
    },
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "test": "vitest",
      "script": "node -r ts-node/register -r esm ./script.ts"
    },
    "devDependencies": {
      "@types/node": "^18.15.10",
      "esm": "^3.2.25",
      "ts-node": "^10.9.1",
      "typescript": "^5.0.2",
      "vite": "^4.2.0",
      "vitest": "^0.29.7"
    },
    "dependencies": {
      "vite-plugin-dts": "^2.1.0"
    },
    "readme": "<!-- infuser start title -->  \n# pixel-paradise  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nImage manipulation library.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add pixel-paradise  \n```  \nNPM  \n```bash  \nnpm install pixel-paradise --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add pixel-paradise",
      "installNpm": "npm install pixel-paradise --save",
      "examples": []
    }
  },
  "random-fns": {
    "name": "random-fns",
    "version": "0.1.8",
    "description": "All your random needs in one place.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/random-fns",
    "author": "skulptur",
    "private": false,
    "license": "MIT",
    "module": "dist/random-fns.esm.js",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "keywords": [
      "functional",
      "random",
      "noise",
      "probability",
      "chance"
    ],
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "size-limit": [
      {
        "path": "dist/random-fns.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/random-fns.esm.js",
        "limit": "10 KB"
      }
    ],
    "devDependencies": {
      "@size-limit/preset-small-lib": "^4.10.2",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "dependencies": {
      "open-simplex-noise": "^2.5.0",
      "unit-fns": "^0.1.7"
    },
    "readme": "<!-- infuser start title -->  \n# random-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nAll your random needs in one place.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add random-fns  \n```  \nNPM  \n```bash  \nnpm install random-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add random-fns",
      "installNpm": "npm install random-fns --save",
      "examples": []
    }
  },
  "reactive-fns": {
    "version": "0.2.2",
    "description": "This library is based on the brilliant Callbag spec by André Staltz, which allows creating both pullable and listenable streams from simple functions. That makes it lightweight and flexible and that's why it shines when used as a primitive for libraries or apps!",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/reactive-fns",
    "keywords": [
      "callbag",
      "observable",
      "iterable",
      "streams",
      "reactive",
      "functional"
    ],
    "private": false,
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/reactive-fns.git"
    },
    "license": "MIT",
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test --passWithNoTests",
      "lint": "tsdx lint",
      "prepare": "tsdx build",
      "size": "size-limit",
      "analyze": "size-limit --why"
    },
    "prettier": {
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "jsxSingleQuote": true,
      "arrowParens": "always"
    },
    "name": "reactive-fns",
    "author": "skulptur",
    "module": "dist/reactive-fns.esm.js",
    "size-limit": [
      {
        "path": "dist/reactive-fns.cjs.production.min.js",
        "limit": "10 KB"
      },
      {
        "path": "dist/reactive-fns.esm.js",
        "limit": "10 KB"
      }
    ],
    "dependencies": {
      "callbag": "1.4.0",
      "callbag-combine": "^1.2.0",
      "callbag-common": "^0.1.8",
      "callbag-concat": "1.2.1",
      "callbag-debounce": "^2.1.3",
      "callbag-empty": "^1.0.1",
      "callbag-filter": "^1.1.0",
      "callbag-flatten": "^1.7.0",
      "callbag-for-each": "1.1.0",
      "callbag-from-event": "^1.3.0",
      "callbag-from-iter": "^1.3.0",
      "callbag-from-obs": "1.2.0",
      "callbag-from-promise": "^1.3.0",
      "callbag-interval": "^1.2.0",
      "callbag-map": "^1.1.0",
      "callbag-merge": "^3.2.2",
      "callbag-of": "^2.0.0",
      "callbag-pipe": "^1.2.0",
      "callbag-sample": "^2.1.0",
      "callbag-scan": "^1.1.0",
      "callbag-share": "1.3.0",
      "callbag-skip": "1.1.0",
      "callbag-subscribe": "^1.5.1",
      "callbag-take": "^1.5.0",
      "common-fns": "^0.1.1"
    },
    "devDependencies": {
      "@size-limit/preset-small-lib": "^4.10.2",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "readme": "<!-- infuser start title -->  \n# reactive-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nThis library is based on the brilliant Callbag spec by André Staltz, which allows creating both pullable and listenable streams from simple functions. That makes it lightweight and flexible and that's why it shines when used as a primitive for libraries or apps!  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add reactive-fns  \n```  \nNPM  \n```bash  \nnpm install reactive-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport { pipe, interval, tap, map, filter, forEach } from 'reactive-fns'\n\npipe(\n  interval(1000),\n  tap((v) => console.log('Before: ' + v)),\n  map((x) => x * 3),\n  filter((x) => x % 2 === 0),\n  forEach((v) => console.log('After: ' + v))\n)\n```\n\n### Source Creators\n\n- fromEvent: Listen to DOM event.\n- fromIter: Convert an Iterable or Iterator to a pullable stream (only send data when requested).\n- fromPromise: Converts a promise to a stream.\n- interval: Emits an increasing number at given intervals.\n- of: Convert static value(s) to a stream.\n\n### Operators\n\n- debounce: Debounces incoming values.\n- filter: Filters incoming values.\n- flatten: Flattens higher-order streams.\n- map: Transforms incoming values.\n- mapTo: Transforms the contents of the stream to the provided value.\n- sample: Operator that samples a pullable stream when a listenable stream emits.\n- scan: Combine consecutive values from stream.\n- share: Multicast stream.\n- skip: Ignores the first n of the stream.\n- skipRepeats: Skips consecutive values that pass the given predicate (defaults to a === b).\n- startWith: Start with given values.\n- take: Take a maximum number of values from stream.\n- withPrevious: Puts the previous value with current in an array.\n\n### Combinators\n\n- concat: Combine streams by putting one stream after the previous stream ends.\n- merge: Merges given streams, emitting when each one emits.\n- combine: Combines given streams, emits arrays of latest values of each.\n\n### Utilities\n\n- extract: Get the last emitted value if it exists.\n- forEach: Subscribes to given stream.\n- pipe: Pipes streams to operators to sinks.\n- tap: Taps into given stream.\n\n## Learn more\n\n- [Callbag basics](https://github.com/staltz/callbag-basics)\n- [Why we need callbags](https://staltz.com/why-we-need-callbags.html)\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add reactive-fns",
      "installNpm": "npm install reactive-fns --save",
      "examples": []
    }
  },
  "social-matrix": {
    "name": "social-matrix",
    "private": true,
    "version": "0.0.1",
    "description": "Automatically arrange posts order",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/social-matrix",
    "keywords": [
      "typescript",
      "cli"
    ],
    "license": "MIT",
    "main": "./dist/index.js",
    "bin": "./dist/cli.js",
    "files": [
      "dist/**/*"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skulptur.git"
    },
    "scripts": {
      "dev": "ts-node ./src/cli.ts",
      "clean": "rimraf ./dist/ ./exec/",
      "build": "npm run clean && tsc",
      "bundle": "npm run build && pkg . --out-dir ./exec/",
      "test": "jest"
    },
    "devDependencies": {
      "@types/jest": "^29.5.0",
      "@types/node": "^18.15.5",
      "jest": "^29.5.0",
      "ts-jest": "^29.0.5",
      "pkg": "^5.8.1",
      "rimraf": "^2.6.3",
      "ts-node": "^10.9.1"
    },
    "dependencies": {
      "commander": "^10.0.0",
      "typescript": "^5.0.2"
    },
    "readme": "# social-matrix\n\nA simple CLI tool to concatenate exported TypeScript files.\n\n## Description\n\nconcat-ts is a command-line utility that processes TypeScript files, concatenating them while preserving their export order. It simplifies the process of merging exported TypeScript files into a single output file, making it easier to manage and share code.\n\n## Features\n\nConcatenates TypeScript files in topological order based on their exports. Removes import declarations from the output file. Easy to integrate into your build process\n\n## Installation\n\nInstall concat-ts as a global package:\n\n```bash\nnpm install -g concat-ts\n```\n\nOr, add it as a dependency to your project:\n\n```bash\nnpm install concat-ts --save-dev\n```\n\n## Usage\n\nCommand Line\n\n```bash\nconcat-ts -i <input_entry_path> -o <output_path>\n```\n\n- -i, --input <path>: Input entry path (required)\n- -o, --output <path>: Output path (required)\n\nProgrammatically\n\n```typescript\nimport { concatTs } from \"concat-ts\";\n\nconcatTs({\n  input: \"path/to/input/entry.ts\",\n  output: \"path/to/output/file.ts\",\n});\n```\n\nExample\nGiven the following TypeScript files:\n\nindex.ts\n\n```typescript\nexport { default as Foo } from \"./Foo\";\nexport { default as Bar } from \"./Bar\";\n```\n\nFoo.ts\n\n```typescript\nexport default class Foo {\n  // ...\n}\n```\n\nBar.ts\n\n```typescript\nexport default class Bar {\n  // ...\n}\n```\n\nRunning the command:\n\n```bash\nconcat-ts -i index.ts -o output.ts\n```\n\nWill produce the following concatenated output file:\n\noutput.ts\n\n```typescript\nexport default class Foo {\n  // ...\n}\n\nexport default class Bar {\n  // ...\n}\n```\n\nAs you can see this is a simple concat and things such as the default exports will not be fixed. That being said, the files are topologically imported.\n\n## License\n\nMIT License\n\n# Development\n\n### **dev**\n\n`npm run dev`\n\nRuns the CLI application.\n\nYou can pass arguments to your application by running `npm run dev -- --your-argument`. The extra `--` is so that your arguments are passed to your CLI application, and not `npm`.\n\n### **clean**\n\n`npm run clean`\n\nRemoves any built code and any built executables.\n\n### **build**\n\n`npm run build`\n\nCleans, then builds the TypeScript code.\n\nYour built code will be in the `./dist/` directory.\n\n### **test**\n\n`npm run test`\n\nCleans, then builds, and tests the built code.\n\n### **bundle**\n\n`npm run bundle`\n\nCleans, then builds, then bundles into native executables for Windows, Mac, and Linux.\n\nYour shareable executables will be in the `./exec/` directory.\n",
    "usage": {
      "installYarn": "yarn add social-matrix",
      "installNpm": "npm install social-matrix --save",
      "examples": []
    }
  },
  "unit-fns": {
    "name": "unit-fns",
    "author": "Gustavo Spredemann",
    "description": "Unit-fns provides composable primitives that make it easy to generate complex numerical patterns with little code.",
    "module": "dist/unit-fns.esm.js",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/unit-fns",
    "version": "0.2.3",
    "license": "MIT",
    "private": false,
    "keywords": [
      "TypeScript",
      "Numerical patterns",
      "Composable primitives",
      "Mathematical functions",
      "Functional programming",
      "Code generation",
      "Pattern generation",
      "Numerical computations",
      "Data manipulation",
      "Data visualization"
    ],
    "main": "dist/index.js",
    "typings": "dist/index.d.ts",
    "files": [
      "dist",
      "src"
    ],
    "engines": {
      "node": ">=10"
    },
    "scripts": {
      "start": "tsdx watch",
      "build": "tsdx build",
      "test": "tsdx test",
      "lint": "tsdx lint --fix",
      "prepare": "tsdx build"
    },
    "peerDependencies": {},
    "prettier": {
      "printWidth": 80,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5"
    },
    "devDependencies": {
      "data-fns": "^0.1.8",
      "tsdx": "^0.13.2",
      "tslib": "^2.0.0",
      "typescript": "^3.9.6"
    },
    "dependencies": {},
    "readme": "<!-- infuser start title -->  \n# unit-fns  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nUnit-fns provides composable primitives that make it easy to generate complex numerical patterns with little code.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add unit-fns  \n```  \nNPM  \n```bash  \nnpm install unit-fns --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n## Use\n\n```typescript\nimport { toUnit } from 'unit-fns'\n\nconsole.log(toUnit(10)) // 1\n```\n\n[Examples](https://github.com/skulptur/unit-fns/tree/master/example)\n\n## API\n\n- Most functions receive and return numbers in the 0-1 range. Let's call a number that is in that range a Unit.\n- Functions that can be pure, are pure.\n- The argument order is optimized for partial application.\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add unit-fns",
      "installNpm": "npm install unit-fns --save",
      "examples": []
    }
  },
  "uplifter": {
    "name": "uplifter",
    "private": true,
    "version": "0.0.0",
    "description": "Give your packages a makeover with this library.",
    "homepage": "https://github.com/skulptur/skultpur/tree/main/packages/uplifter",
    "keywords": [
      "typescript",
      "cli"
    ],
    "license": "MIT",
    "main": "./dist/index.js",
    "bin": "./dist/cli.js",
    "files": [
      "dist/**/*"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/skulptur/skulptur.git"
    },
    "scripts": {
      "dev": "ts-node ./src/cli.ts",
      "clean": "rimraf ./dist/ ./exec/",
      "build": "npm run clean && tsc",
      "bundle": "npm run build && pkg . --out-dir ./exec/",
      "test": "jest"
    },
    "devDependencies": {
      "@types/jest": "^29.5.0",
      "@types/node": "^18.15.5",
      "jest": "^29.5.0",
      "pkg": "^5.8.1",
      "rimraf": "^2.6.3",
      "ts-jest": "^29.0.5",
      "ts-node": "^10.9.1"
    },
    "dependencies": {
      "@sinclair/typebox": "^0.26.8",
      "change-case": "^4.1.2",
      "commander": "^10.0.0",
      "markdown-fns": "*",
      "infuser": "*",
      "typescript": "^5.0.2",
      "upper-case-first": "^2.0.2"
    },
    "readme": "<!-- infuser start title -->  \n# uplifter  \n<!-- infuser end title -->\n<!-- infuser start description -->  \nGive your packages a makeover with this library.  \n<!-- infuser end description -->\n\n<!-- infuser start installation -->  \n## Installation  \nYarn  \n```bash  \nyarn add uplifter  \n```  \nNPM  \n```bash  \nnpm install uplifter --save  \n```  \n<!-- infuser end installation -->\n\n<!-- infuser start usage -->\n<!-- infuser end usage -->\n\n<!-- infuser start development -->\n<!-- infuser end development -->\n\n<!-- infuser start footer -->  \n## Notice  \nThis library is open source software released under the MIT license. See the LICENSE file for more information. This code is provided as-is, without any warranty or guarantee of any kind. Use at your own risk. I cannot be held responsible for any issues or damages that may arise from the use of this code. However, I have done my best to ensure that it is well-written and thoroughly tested, and I am always open to feedback and suggestions for improvement. Thank you for your understanding. I hope you enjoy using it and find it useful in your projects. If you have any questions or feedback, please don't hesitate to reach out.  \n<!-- infuser end footer -->\n",
    "usage": {
      "installYarn": "yarn add uplifter",
      "installNpm": "npm install uplifter --save",
      "examples": []
    }
  }
}