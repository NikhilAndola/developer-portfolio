/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#07080c',
          dark: '#0d0f15',
          card: '#121622',
          cardHover: '#181d2c',
          border: '#232a3d',
          borderHover: '#3b4560',
          cyan: '#00f2fe',
          cyanGlow: '#00d2ff',
          amber: '#ff9900',
          amberGlow: '#ff5e3a',
          purple: '#8a2be2',
          emerald: '#10b981',
          textMuted: '#94a3b8',
          textLight: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-float': 'subtleFloat 4s ease-in-out infinite',
        'beat-flash': 'beatFlash 0.15s ease-out',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.4))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(0, 242, 254, 0.1))' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        beatFlash: {
          '0%': { transform: 'scale(1.25)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.85' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.35)',
        'neon-amber': '0 0 25px -5px rgba(255, 153, 0, 0.35)',
        'neon-purple': '0 0 25px -5px rgba(138, 43, 226, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
