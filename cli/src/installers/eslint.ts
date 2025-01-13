import path from "path";
import fs from "fs-extra";
import { format } from "prettier";

import { _initialConfig } from "~/../template/extras/config/_eslint.js";
import { type Installer } from "~/installers/index.js";

export const dynamicEslintInstaller: Installer = ({ projectDir, packages }) => {
  const usingDrizzle = !!packages?.drizzle?.inUse;

  const imports = getImports(usingDrizzle);

  const eslintConfig = getEslintConfig(usingDrizzle);
  const stringifiedConfig = JSON.stringify(eslintConfig, null, 2).replace(
    /"%%|%%"/g,
    ""
  );

  // Convert config from _eslint.js to eslint.config.js
  const eslintConfigFileContents = [
    ...imports,
    "",
    "export default tseslint.config(",
    stringifiedConfig,
    ");",
  ].join("\n");

  format(eslintConfigFileContents, { parser: "typescript" })
    .then((content) => {
      const eslintConfigDest = path.join(projectDir, "eslint.config.js");
      fs.writeFileSync(eslintConfigDest, content, "utf-8");
    })
    .catch((error) => {
      console.error("Invalid 'eslint.config.js'.", error);
    });
};

function getImports(usingDrizzle: boolean) {
  const imports = [
    'import nextPlugin from "@next/eslint-plugin-next"',
    'import tseslint from "typescript-eslint"',
  ];

  if (usingDrizzle) {
    imports.unshift('import drizzlePlugin from "eslint-plugin-drizzle"');
  }

  return imports;
}

function getEslintConfig(usingDrizzle: boolean) {
  const eslintConfig = _initialConfig;

  if (usingDrizzle) {
    Object.assign(eslintConfig.plugins, {
      drizzle: "%%drizzlePlugin%%",
    });

    Object.assign(eslintConfig.rules, {
      "drizzle/enforce-delete-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
      "drizzle/enforce-update-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
    });
  }

  return eslintConfig;
}
