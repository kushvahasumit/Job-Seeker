/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: " #3949AB",
        greyIsh: "#f1f4f8",
        cardShadow: "#f7f8f9",
        textColor: "#252b36",
    },
    },
  },
  plugins: [],
}

