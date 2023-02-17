/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#343541",
        "custom-gray-light": "#40414F",
      },
    },
  },
  plugins: [],
};
