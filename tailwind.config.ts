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
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1rem' }],    // 12px (min accessible threshold)
        'xs':  ['0.8125rem', { lineHeight: '1.125rem' }], // 13px
        'sm':  ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
        'lg':  ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
        'xl':  ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1' }],             // 48px
      },
      textColor: {
        primary: '#0F172A',      // slate-900 (primary text)
        secondary: '#475569',    // slate-600 (subheadings / body)
        muted: '#64748B',        // slate-500 (meta info / captions)
        brand: '#0A4B51',        // teal-700 (primary brand teal)
        accent: '#146870',       // teal-600 (secondary accent)
        light: '#F8FAFC',        // white / off-white for dark cards
        'light-muted': '#94A3B8', // slate-400 (muted text on dark bg)
      },
      borderRadius: {
        sm: '0.25rem',    // 4px - small tags & badges
        md: '0.5rem',     // 8px - inputs, buttons, tooltips
        xl: '1rem',       // 16px - cards, modals, containers
        full: '9999px',   // pill buttons, rounded action tags
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
