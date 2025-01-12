import path from "path";
import fs from "fs-extra";
import { format } from "prettier";

import { _initialConfig } from "~/../template/extras/config/_eslint.js";
import { type Installer } from "~/installers/index.js";

export const dynamicEslintInstaller: Installer = ({ projectDir, packages }) => {
  const usingDrizzle = !!packages?.drizzle?.inUse;

  const rawConfig = getRawEslintConfig(usingDrizzle);
  const stringConfig = JSON.stringify(rawConfig, null, 2);
  const configBody = stringConfig.replace(/"%%|%%"/g, "");

  const imports = getImports(usingDrizzle);

  // Convert config from _eslint.js to eslint.config.js
  const configFileContents = [
    ...imports,
    "",
    "export default tseslint.config(",
    configBody,
    ");",
  ].join("\n");

  const configDest = path.join(projectDir, "eslint.config.js");
  format(configFileContents, { parser: "typescript" })
    .then((formattedConfigFileContents) => {
      fs.writeFileSync(configDest, formattedConfigFileContents, "utf-8");
    })
    .catch((e) => {
      console.error("Unable to format ESLint config file.", e);
      // Write to fs anyway.
      fs.writeFileSync(configDest, configFileContents, "utf-8");
    });
};

function getRawEslintConfig(usingDrizzle: boolean) {
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

function getImports(usingDrizzle: boolean): string[] {
  const imports = [
    createImport("nextPlugin", "@next/eslint-plugin-next"),
    createImport("tseslint", "typescript-eslint"),
  ];

  if (usingDrizzle) {
    imports.unshift(createImport("drizzlePlugin", "eslint-plugin-drizzle"));
  }

  return imports;
}

function createImport(defaultImportName: string, packageName: string): string {
  return `import ${defaultImportName} from "${packageName}";`;
}
