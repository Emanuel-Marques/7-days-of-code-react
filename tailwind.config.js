/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans: 'Roboto'
    },
    extend: {
      colors: {
        'custom-green': '#10B981',
        'custom-blue': '#0EA5E9',
        'custom-gray': '#6B7280',
        'custom-b-gray': '#94A3B8',
        'custom-text-button-color': '#F1F5F9'
      },
    },
  },
  plugins: [],
}

