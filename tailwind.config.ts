import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        muted: "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          muted: "var(--accent-muted)",
        },
        surface: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          card: "var(--bg-card)",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 40px rgba(245, 158, 11, 0.15)",
        "glow-sm": "0 0 20px rgba(245, 158, 11, 0.1)",
        subtle: "0 4px 20px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
