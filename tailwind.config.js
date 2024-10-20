/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["cinzel", "serif"], // 'serif' is a fallback
      },
    },
  },
  plugins: [require("daisyui")],
};
