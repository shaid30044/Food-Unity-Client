/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        blue1: "#3b82f6",
      },
    },
  },
  plugins: [require("daisyui")],
};
