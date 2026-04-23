import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#0f0f17",
        surface2: "#13131e",
        border: "#1e1e2e",
        accent: "#00FFBF",
        text: {
          primary: "#e0e0f0",
          muted: "#888888",
          dim: "#555555",
          faint: "#444444",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        "card-lg": "16px",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 255, 191, 0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(0, 255, 191, 0)" },
        },
        "packet-travel": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
