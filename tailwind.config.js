// const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  // theme: {
  //   extend: {
  //     colors: {
  //       ["primary"]: `var(--ds-primary, ${colors["red"]["400"]})`,
  //       ["primary-dark"]: `var(--ds-primary-dark, ${colors["red"]["500"]})`,
  //     },
  //   },
  // },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      cursor: ["disabled"],
      ringColor: ["active", "disabled"],
      ringWidth: ["active", "disabled"],
    },
  },
  plugins: [],
};
