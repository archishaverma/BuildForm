import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)", // References Hex variable
        input: "var(--input)", // References Hex variable
        ring: "var(--ring)", // References Hex variable
        background: "var(--background)", // References Hex variable
        foreground: "var(--foreground)", // References Hex variable
        primary: {
          DEFAULT: "var(--primary)", // Primary color
          foreground: "var(--primary-foreground)", // Foreground color
        },
        secondary: {
          DEFAULT: "var(--secondary)", // Secondary color
          foreground: "var(--secondary-foreground)", // Foreground color
        },
        destructive: {
          DEFAULT: "var(--destructive)", // Destructive color
          foreground: "var(--destructive-foreground)", // Foreground color
        },
        muted: {
          DEFAULT: "var(--muted)", // Muted color
          foreground: "var(--muted-foreground)", // Foreground color
        },
        accent: {
          DEFAULT: "var(--accent)", // Accent color
          foreground: "var(--accent-foreground)", // Foreground color
        },
        popover: {
          DEFAULT: "var(--popover)", // Popover color
          foreground: "var(--popover-foreground)", // Foreground color
        },
        card: {
          DEFAULT: "var(--card)", // Card color
          foreground: "var(--card-foreground)", // Foreground color
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Radius variable
        md: "calc(var(--radius) - 2px)", // Computed radius
        sm: "calc(var(--radius) - 4px)", // Smaller radius
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
