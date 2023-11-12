/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mulli: ["Mulish", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
