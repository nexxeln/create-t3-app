export const _initialConfig = {
  plugins: {
    "@next/next": "%%nextPlugin%%",
    "@typescript-eslint": "%%tseslint.plugin%%",
  },
  extends: [
    "%%...nextPlugin.configs['core-web-vitals'].rules%%",
    "%%...tseslint.configs.recommendedTypeChecked%%",
    "%%...tseslint.configs.stylisticTypeChecked%%",
  ],
  languageOptions: {
    parser: "%%tseslint.parser%%",
    parserOptions: { project: true },
  },
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
  },
};
