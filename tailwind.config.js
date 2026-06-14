/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: '#f5f3ff',
            100: '#ede9fe',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            900: '#1e1b4b',
          },
          pink: {
            50: '#fdf2f8',
            500: '#ec4899',
            600: '#db2777',
          },
          orange: {
            50: '#fff7ed',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
          },
          teal: {
            50: '#f0fdfa',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
          },
          yellow: {
            100: '#fef9c3',
            400: '#facc15',
            500: '#eab308',
          },
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
