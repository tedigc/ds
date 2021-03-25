const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    content: [
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/layouts/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        ["primary"]: `var(--ds-primary, ${colors["red"]["400"]})`,
        ["primary-dark"]: `var(--ds-primary-dark, ${colors["red"]["500"]})`,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      cursor: ["disabled"],
      ringColor: ["hover", "active", "disabled"],
      ringWidth: ["hover", "active", "disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
};
