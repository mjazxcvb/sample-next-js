import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        comico: ["Comico"],
        recia: ["Recia"],
        general: ["GeneralSans", "sans"],
      },
      colors: {
        black: "#2b2d42",
        primary: "#9e2a2b",
        secondary: "#8d99ae",
        accent: {
          "100": "#fff1e6",
          "200": "#eddcd2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
