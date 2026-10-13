/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          muted: 'var(--color-accent-muted)',
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        wine: {
          900: '#1b0d14',
          800: '#2b121f',
          700: '#3d172b',
        },
        gold: {
          400: '#dba467',
          500: '#c69255',
          600: '#a87439',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        subtle: 'var(--border-subtle)',
      },
      boxShadow: {
        'glow-gold': '0 0 30px -5px rgba(198, 146, 85, 0.25)',
        'deep': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
