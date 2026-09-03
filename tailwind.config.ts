import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          50: "#FCF8ED",
          100: "#F7EED3",
          200: "#EEDB9E",
          300: "#E3C569",
          400: "#D6AB4C",
          500: "#B88E33",
          600: "#916D24",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          50: "#F0F7F5",
          100: "#D8ECE7",
          500: "#1E5048",
          600: "#163E38",
          700: "#102E29",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        success: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
          soft: "#ECFDF5",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
          soft: "#FEF2F2",
        },
      },
      borderRadius: {
        theme: "18px",
        card: "22px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Amiri", "Cinzel", "serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        arabic: ["var(--font-arabic)", "Amiri", "Scheherazade New", "Traditional Arabic", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        glow: "0 0 25px rgba(214, 171, 76, 0.25)",
        floating: "0 10px 30px -5px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
