/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      fontFamily: {
        Mulli: [ "Montserrat", "sans-serif" ],
        Nunito: [ "Montserrat", "sans-serif" ],
      },
    },
  },
  plugins: [],
};
