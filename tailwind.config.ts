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
        bg: "#F5F0E8",
        surface: "#FEFEFE",
        surface2: "#E8E0D0",
        border: "#C5BFB5",
        accent: "#00A896",
        teal: "#00857A",
        acento: "#FF6B35",
        ink: "#0F1923",
        arena: "#F5F0E8",
        "arena-oscura": "#E8E0D0",
        blanco: "#FEFEFE",
        text: {
          primary: "#0F1923",
          muted: "#6B7280",
          dim: "#9CA3AF",
          faint: "#C5BFB5",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Helvetica", "Arial", "sans-serif"],
        display: ["var(--font-dm-serif)", "Helvetica Neue", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "Courier", "monospace"],
      },
      borderRadius: {
        card: "14px",
        "card-lg": "16px",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 168, 150, 0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(0, 168, 150, 0)" },
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
