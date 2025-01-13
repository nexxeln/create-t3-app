import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
    },
  },
];
