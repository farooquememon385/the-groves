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
        background: "#283606",
        foreground: "#0F1500",
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
export default config;
