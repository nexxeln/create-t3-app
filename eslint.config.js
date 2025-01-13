/// <reference types="./eslint.d.ts" />

import importPlugin from "eslint-plugin-import";
import isaacScriptPlugin from "eslint-plugin-isaacscript";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["cli/dist/**"],
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      import: importPlugin,
      isaacscript: isaacScriptPlugin,
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      prettierPluginRecommended,
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
      },
    },
    rules: {
      // These off/not-configured-the-way-we-want lint rules we like & opt into
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],

      // For educational purposes we format our comments/jsdoc nicely
      "isaacscript/complete-sentences-jsdoc": "warn",
      "isaacscript/format-jsdoc-comments": "warn",

      // These lint rules don't make sense for us but are enabled in the preset configs
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/restrict-template-expressions": "off",

      // This rule doesn't seem to be working properly
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
  {
    files: ["./cli/template/**/*.{ts,tsx}"],
    ...tseslint.configs.disableTypeChecked,
  },
);
