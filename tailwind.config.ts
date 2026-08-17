import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EFEFEF", // Light, warm off-white
        foreground: "#1A1A1A", // Near-black body text
        teal: {
          50: "#F0F7F6",
          100: "#E4EEEC", // Secondary light tint
          200: "#C4DBD7",
          300: "#94BDB7",
          600: "#146870",
          700: "#0A4B51", // Primary brand color (deep teal)
          800: "#07373C",
          900: "#042427",
        },
        brand: {
          bg: "#EFEFEF",
          primary: "#0A4B51",
          secondary: "#E4EEEC",
          text: "#1A1A1A",
          muted: "#666666",
          card: "#FFFFFF",
          border: "#E0E5E4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(10, 75, 81, 0.05)",
        card: "0 10px 30px -5px rgba(10, 75, 81, 0.08)",
        floating: "0 20px 40px -10px rgba(10, 75, 81, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
