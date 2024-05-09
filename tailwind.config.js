/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        panel: "calc(100vh - 6rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
