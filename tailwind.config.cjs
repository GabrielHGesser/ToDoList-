/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colors Base --------
        gray_100: "#F2F2F2",
        gray_200: "#D9D9D9",
        gray_300: "#808080",
        gray_400: "#333333",
        gray_500: "#262626",
        gray_600: "#1A1A1A",
        gray_700: "#0D0D0D",
        danger: "#E25858",
        // --------------------

        // Produto ------------
        purple: "#8284FA",
        purple_dark: "#5E60CE",
        blue: "#4EA8DE",
        blue_dark: "#1E6F9F",
        blueHover: "rgba(30, 111, 159, 0.6)",
        // --------------------
      },
    },
  },
  plugins: [],
};
