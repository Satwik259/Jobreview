    


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'custom-inset': 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      colors: {
        customGray: '#D1D1D1',
      },
    },
  },
  plugins: [],
}