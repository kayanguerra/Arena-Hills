import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#dde5ff",
          200: "#c2d0ff",
          300: "#9bb3ff",
          400: "#6f8fff",
          500: "#2b47a1",
          600: "#243d89",
          700: "#1d326f",
          800: "#182a5b",
          900: "#13234a"
        },
        sand: {
          50: "#f6fee9",
          100: "#e9fccd",
          200: "#d4f79b",
          300: "#b8ed63",
          400: "#95d83f",
          500: "#84c53a",
          600: "#669d2d",
          700: "#4f7925",
          800: "#426122",
          900: "#395320"
        },
        ink: "#091432"
      },
      boxShadow: {
        glow: "0 20px 70px -25px rgba(43, 71, 161, 0.55)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 10% 20%, rgba(149,216,63,.22) 0%, transparent 45%), radial-gradient(circle at 85% 10%, rgba(43,71,161,.3) 0%, transparent 45%), radial-gradient(circle at 50% 100%, rgba(255,255,255,.08) 0%, transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;