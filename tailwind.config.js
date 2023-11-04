/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        blue1: "#3b82f6",
        blue2: "#bfdbfe",
        blue3: "#dbeafe",
        dark1: "#333333",
        star: "#FF8C47",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
