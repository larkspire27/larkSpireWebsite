/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalGold: {
          light: '#F5E096',
          DEFAULT: '#D4AF37',
          dark: '#AA820A',
          deep: '#856404'
        },
        velvetMaroon: {
          light: '#A51C1C',
          DEFAULT: '#7A0C0C',
          dark: '#4A0404',
          deep: '#2D0202'
        },
        imperialEmerald: '#0E4735',
        warmIvory: '#FAF6EE',
        silkCream: '#FFFDF9',
        marigoldOrange: '#FF8C00'
      },
      fontFamily: {
        serif: ['Cinzel Decorative', 'Cinzel', 'Rozha One', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        script: ['Great Vibes', 'Alex Brush', 'cursive'],
        hindi: ['Noto Serif Devanagari', 'Kalam', 'serif']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'velvet-gradient': 'linear-gradient(180deg, #7A0C0C 0%, #4A0404 100%)',
        'emerald-gradient': 'linear-gradient(180deg, #0E4735 0%, #062319 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.95))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
