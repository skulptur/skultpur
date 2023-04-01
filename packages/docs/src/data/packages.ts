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
      "husky": "^7.0.4",
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
      "husky": "^6.0.0",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
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
      "husky": "^6.0.0",
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
      "typescript": "5.0.2",
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
      "typescript": "^3.8.3"
    },
    "dependencies": {
      "lib": "^4.1.2"
    },
    "usage": {
      "installYarn": "yarn add kween",
      "installNpm": "npm install kween --save",
      "examples": [
        {
          "name": "Browser",
          "content": "import { tween, bounceInOut } from \"kween\";\n\ntween({\n  duration: 1000, // in milliseconds\n  ease: bounceInOut,\n  onUpdate: (value, progress) => {\n    // value is eased, progress is linear\n    console.log(value, progress);\n  },\n});\n"
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
      "husky": "^7.0.4",
      "size-limit": "^7.0.8",
      "tsdx": "^0.14.1",
      "tslib": "^2.4.0",
      "typescript": "^4.6.3"
    },
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
    "husky": {
      "hooks": {
        "pre-commit": "tsdx lint"
      }
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
      "husky": "^4.2.5",
      "tsdx": "^0.13.2",
      "tslib": "^2.0.0",
      "typescript": "^3.9.7"
    },
    "dependencies": {
      "data-fns": "*"
    },
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
      "husky": "^4.3.7",
      "size-limit": "^4.9.1",
      "tsdx": "^0.14.1",
      "tslib": "^2.1.0",
      "type-fest": "^1.0.2",
      "typescript": "^4.1.3"
    },
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
    "husky": {
      "hooks": {
        "pre-commit": "tsdx lint"
      }
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
      "husky": "^7.0.4",
      "size-limit": "^7.0.8",
      "tsdx": "^0.14.1",
      "tslib": "^2.4.0",
      "typescript": "^4.6.3"
    },
    "dependencies": {
      "audio-fns": "^0.3.2",
      "lightcast": "^0.1.5"
    },
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
      "husky": "^6.0.0",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "dependencies": {
      "open-simplex-noise": "^2.5.0",
      "unit-fns": "^0.1.7"
    },
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
      "husky": "^6.0.0",
      "size-limit": "^4.10.2",
      "tsdx": "^0.14.1",
      "tslib": "^2.2.0",
      "typescript": "^4.2.4"
    },
    "usage": {
      "installYarn": "yarn add reactive-fns",
      "installNpm": "npm install reactive-fns --save",
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
    "husky": {
      "hooks": {
        "pre-commit": "tsdx lint"
      }
    },
    "prettier": {
      "printWidth": 80,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "es5"
    },
    "devDependencies": {
      "data-fns": "^0.1.8",
      "husky": "^4.2.5",
      "tsdx": "^0.13.2",
      "tslib": "^2.0.0",
      "typescript": "^3.9.6"
    },
    "dependencies": {},
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
      "infuser": "*",
      "markdown-fns": "*",
      "typescript": "^5.0.2",
      "upper-case-first": "^2.0.2"
    },
    "usage": {
      "installYarn": "yarn add uplifter",
      "installNpm": "npm install uplifter --save",
      "examples": []
    }
  }
}