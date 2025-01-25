import path from "path";
import fs from "fs-extra";

import { _initialConfig } from "~/../template/extras/config/_eslint.js";
import { PKG_ROOT } from "~/consts.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";
import { addPackageScript } from "~/utils/addPackageScript.js";
import { type AvailableDependencies } from "./dependencyVersionMap.js";

// Also installs prettier
export const dynamicEslintInstaller: Installer = ({ projectDir, packages }) => {
  const devPackages: AvailableDependencies[] = [
    "prettier",
    "eslint",
    "eslint-config-next",
    "@types/eslint",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
  ];

  if (packages?.tailwind.inUse) {
    devPackages.push("prettier-plugin-tailwindcss");
  }
  if (packages?.drizzle.inUse) {
    devPackages.push("eslint-plugin-drizzle");
  }

  addPackageDependency({
    projectDir,
    dependencies: devPackages,
    devMode: true,
  });
  const extrasDir = path.join(PKG_ROOT, "template/extras");

  // Prettier
  let prettierSrc: string;
  if (packages?.tailwind.inUse) {
    prettierSrc = path.join(extrasDir, "config/_tailwind.prettier.config.js");
  } else {
    prettierSrc = path.join(extrasDir, "config/_prettier.config.js");
  }
  const prettierDest = path.join(projectDir, "prettier.config.js");

  fs.copySync(prettierSrc, prettierDest);

  addPackageScript({
    projectDir,
    scripts: {
      lint: "next lint",
      "lint:fix": "next lint --fix",
      check: "next lint && tsc --noEmit",
      "format:write": 'prettier --write "**/*.{ts,tsx,js,jsx,mdx}" --cache',
      "format:check": 'prettier --check "**/*.{ts,tsx,js,jsx,mdx}" --cache',
    },
  });

  // eslint
  const usingDrizzle = !!packages?.drizzle?.inUse;
  const eslintConfig = getEslintConfig({ usingDrizzle });

  // Convert config from _eslint.config.json to .eslintrc.cjs
  const eslintrcFileContents = [
    '/** @type {import("eslint").Linter.Config} */',
    `const config = ${JSON.stringify(eslintConfig, null, 2)}`,
    "module.exports = config;",
  ].join("\n");

  const eslintConfigDest = path.join(projectDir, ".eslintrc.cjs");
  fs.writeFileSync(eslintConfigDest, eslintrcFileContents, "utf-8");
};

const getEslintConfig = ({ usingDrizzle }: { usingDrizzle: boolean }) => {
  const eslintConfig = _initialConfig;

  if (usingDrizzle) {
    eslintConfig.plugins = [...(eslintConfig.plugins ?? []), "drizzle"];

    eslintConfig.rules = {
      ...eslintConfig.rules,
      "drizzle/enforce-delete-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
      "drizzle/enforce-update-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
    };
  }
  return eslintConfig;
};
