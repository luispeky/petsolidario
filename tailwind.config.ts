import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#123f36",
        forest: "#176151",
        leaf: "#d8efe0",
        cream: "#f8f5ed",
        coral: "#ed8d6e",
        gold: "#edc66c",
      },
      fontFamily: { sans: ["Arial", "sans-serif"] },
      boxShadow: { card: "0 16px 42px rgba(24,51,45,.08)" },
    },
  },
  plugins: [],
};
export default config;
