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
        primary: "#6016FC",
        carddark: "#161629",
        green: "#16FCD2",
        muted: "#FFFFFF",
        highlight: "#221048",
        light: "rgba(255, 255, 255, 5%)",
        primarylight: "rgba(96, 22, 252, 10%)",
        dark: "#0B0B22",
        red: "#FC165B",
      },
    },
  },
  plugins: [],
};
export default config;
