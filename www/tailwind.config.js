module.exports = {
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "var(--ifm-color-primary-dark)",
          darker: "var(--ifm-color-primary-darker)",
          darkest: "var(--ifm-color-primary-darkest)",
          DEFAULT: "var(--ifm-color-primary)",
          light: "var(--ifm-color-light)",
          lighter: "var(--ifm-color-lighter)",
          lightest: "var(--ifm-color-lightest)",
        },
      },
    },
  },
  plugins: [],
};
