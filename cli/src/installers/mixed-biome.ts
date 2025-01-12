import path from "path";
import fs from "fs-extra";

import { _initialConfig } from "~/../template/extras/config/_eslint.js";
import { PKG_ROOT } from "~/consts.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";
import { addPackageScript } from "~/utils/addPackageScript.js";
import { type AvailableDependencies } from "./dependencyVersionMap.js";

// Also installs prettier
export const mixedBiomeInstaller: Installer = ({ projectDir, packages }) => {
  const devPackages: AvailableDependencies[] = [
    "@biomejs/biome",
    "eslint",
    "eslint-config-next",
    "@types/eslint",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
  ];

  addPackageDependency({
    projectDir,
    dependencies: devPackages,
    devMode: true,
  });
  const extrasDir = path.join(PKG_ROOT, "template/extras");

  // Biome

  const biomeSrc = path.join(extrasDir, "config/eslintBiome.json");

  const biomeDest = path.join(projectDir, "biome.jsonc");

  fs.copySync(biomeSrc, biomeDest);

  addPackageScript({
    projectDir,
    scripts: {
      lint: "next lint",
      "lint:fix": "next lint --fix",
      check: "next lint && tsc --noEmit",
      "format:write": "biome format --write .",
      "format:check": "biome format .",
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
