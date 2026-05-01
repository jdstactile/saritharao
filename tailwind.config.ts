import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#164551",
        accent: "#04A5C2",
        "light-blue": "#5EB5D5",
        "warm-bg": "#F4F0E9",
      },
      fontFamily: {
        heading: [
          "Outfit",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Outfit",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
