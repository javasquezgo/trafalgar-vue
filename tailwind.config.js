module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      colors: {
        "color-t": "#1f1534",
        "color-gray": "#7d7987",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
