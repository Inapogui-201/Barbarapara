import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eebc4b",
        secondary: "#3a7ca5",
      },
    },
  },
  plugins: [daisyui],
};
