const defaultTheme = require("tailwindcss/defaultTheme");

const hocusPlugin = require("./hocus.plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{ts,tsx}",
    "../../packages/design-system/src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "414px",
      ...defaultTheme.screens,
    },
  },
  plugins: [hocusPlugin],
};
