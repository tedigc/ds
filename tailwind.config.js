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
        ["primary-50"]: `var(--ds-primary-50, ${colors["indigo"]["50"]})`,
        ["primary-100"]: `var(--ds-primary-100, ${colors["indigo"]["100"]})`,
        ["primary-200"]: `var(--ds-primary-200, ${colors["indigo"]["200"]})`,
        ["primary-300"]: `var(--ds-primary-300, ${colors["indigo"]["300"]})`,
        ["primary-400"]: `var(--ds-primary-400, ${colors["indigo"]["400"]})`,
        ["primary-500"]: `var(--ds-primary-500, ${colors["indigo"]["500"]})`,
        ["primary-600"]: `var(--ds-primary-600, ${colors["indigo"]["600"]})`,
        ["primary-700"]: `var(--ds-primary-700, ${colors["indigo"]["700"]})`,
        ["primary-800"]: `var(--ds-primary-800, ${colors["indigo"]["800"]})`,
        ["primary-900"]: `var(--ds-primary-900, ${colors["indigo"]["900"]})`,
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
