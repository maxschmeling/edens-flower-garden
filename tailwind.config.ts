import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#813e57",
        accent: "#D5CFC9",
      },
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
        fjalla: ["Fjalla One", "sans-serif"],
      },
      fontSize: {
        "4.5xl": ["2.4rem","2.8rem"],
      }
    },
  },
  plugins: [],
};
export default config;
