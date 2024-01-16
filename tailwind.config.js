/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Normal": ['Handlee', 'cursive'],
        "Title": [ 'Sancreek', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

