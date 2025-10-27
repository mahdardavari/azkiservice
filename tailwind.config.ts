import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", //This covers the App Router
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
};

export default config;