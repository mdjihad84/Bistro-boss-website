/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["'Cinzel'", "serif"],
        raleway: ["'Raleway'", "sans-serif"], // Correct format for Raleway
      },
    },
  },
  plugins: [require("daisyui")],
};
