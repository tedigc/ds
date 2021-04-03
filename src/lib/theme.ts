import { CLIENT_RENEG_LIMIT } from "node:tls";
import { useEffect } from "react";

export type Theme = {
  "primary-50": string;
  "primary-100": string;
  "primary-200": string;
  "primary-300": string;
  "primary-400": string;
  "primary-500": string;
  "primary-600": string;
  "primary-700": string;
  "primary-800": string;
  "primary-900": string;
};

export const useTheme = (theme: Theme) => {
  useEffect(() => {
    if (theme) {
      console.log("changing theme...");
      Object.keys(theme).forEach((key) => {
        const name = `--ds-${key}`;
        const colour = theme[key];
        document.documentElement.style.setProperty(name, colour);
      });
    }
  }, [theme]);
};

export const themes = {
  default: {
    "primary-50": "",
    "primary-100": "",
    "primary-200": "",
    "primary-300": "",
    "primary-400": "",
    "primary-500": "",
    "primary-600": "",
    "primary-700": "",
    "primary-800": "",
    "primary-900": "",
  },
  cool: {
    "primary-50": "#EFF6FF",
    "primary-100": "#DBEAFE",
    "primary-200": "#BFDBFE",
    "primary-300": "#93C5FD",
    "primary-400": "#60A5FA",
    "primary-500": "#3B82F6",
    "primary-600": "#2563EB",
    "primary-700": "#1D4ED8",
    "primary-800": "#1E40AF",
    "primary-900": "#1E3A8A",
  },
  burnt: {
    "primary-50": "#FFFBEB",
    "primary-100": "#FEF3C7",
    "primary-200": "#FDE68A",
    "primary-300": "#FCD34D",
    "primary-400": "#FBBF24",
    "primary-500": "#F59E0B",
    "primary-600": "#D97706",
    "primary-700": "#B45309",
    "primary-800": "#92400E",
    "primary-900": "#78350F",
  },
  candy: {
    "primary-50": "#FDF2F8",
    "primary-100": "#FCE7F3",
    "primary-200": "#FBCFE8",
    "primary-300": "#F9A8D4",
    "primary-400": "#F472B6",
    "primary-500": "#EC4899",
    "primary-600": "#DB2777",
    "primary-700": "#BE185D",
    "primary-800": "#9D174D",
    "primary-900": "#831843",
  },
};
