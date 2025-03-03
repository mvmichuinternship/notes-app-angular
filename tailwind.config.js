/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "test-color": "#ff00ff", // bright magenta
      },
    },
  },
  plugins: [],
};
