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

export const theme: Theme = {
  "primary-50": "#ecfdf5",
  "primary-100": "#d1fae5",
  "primary-200": "#a7f3d0",
  "primary-300": "#6ee7b7",
  "primary-400": "#34d399",
  "primary-500": "#10b981",
  "primary-600": "#059669",
  "primary-700": "#047857",
  "primary-800": "#065f46",
  "primary-900": "#064e3b",
};

export const useTheme = (theme: Theme) => {
  useEffect(() => {
    Object.keys(theme).forEach((key) => {
      const name = `--ds-${key}`;
      const colour = theme[key];
      document.documentElement.style.setProperty(name, colour);
    });
  }, [theme]);
};
