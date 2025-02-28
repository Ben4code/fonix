import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pale_orange: "#ffd9a6",
        light_orange: "#fbb03b",
        orange: "#f7931e",
      },
      fontFamily: {
        sans: ["Monserrat", "sans-serif"],
        title: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
