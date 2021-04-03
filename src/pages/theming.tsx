import React, { useState } from "react";
import { Button } from "../components";
import { useTheme, themes } from "../lib/theme";

const Page = () => {
  const [theme, setTheme] = useState(null);
  useTheme(themes[theme]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Theming</h1>

      <p className="mb-4">Click one of the buttons below to change the theme</p>
      <ul className="flex gap-5 mb-6">
        <li>
          <Button
            variant={theme == "default" ? "primary" : "secondary"}
            onClick={() => setTheme("default")}
          >
            Default
          </Button>
        </li>
        <li>
          <Button
            variant={theme == "cool" ? "primary" : "secondary"}
            onClick={() => setTheme("cool")}
          >
            Cool
          </Button>
        </li>
        <li>
          <Button
            variant={theme == "burnt" ? "primary" : "secondary"}
            onClick={() => setTheme("burnt")}
          >
            Burnt
          </Button>
        </li>
        <li>
          <Button
            variant={theme == "candy" ? "primary" : "secondary"}
            onClick={() => setTheme("candy")}
          >
            Candy
          </Button>
        </li>
      </ul>

      <p className="mb-2">
        Defining your own theme is as simple as passing an object into the{" "}
        <code>useTheme</code> hook;
      </p>
      <pre className="bg-gray-200 px-6 rounded text-sm text-gray-700 mb-6">{`
export const theme: Theme = {
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
}

// ...

const App = () => {
  useTheme(theme)

  return (
    <div>
      {/* Your app here... */}
    </div>
  )
}
      `}</pre>
    </div>
  );
};

export default Page;
