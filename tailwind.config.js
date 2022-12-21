/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "762px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        CustomBlue: {
          100: "#d7eae6",
          200: "#afd5cd",
          300: "#87c0b5",
          400: "#5fab9c",
          500: "#379683",
          600: "#2c7869",
          700: "#215a4f",
          800: "#163c34",
          900: "#0b1e1a",
        },
        CustomWhite: {
          100: "#fbfdf9",
          200: "#f8fbf3",
          300: "#f4f9ed",
          400: "#f1f7e7",
          500: "#edf5e1",
          600: "#bec4b4",
          700: "#8e9387",
          800: "#5f625a",
          900: "#2f312d",
        },
        CustomBlack: {
          100: "#cdd7e1",
          200: "#9bafc4",
          300: "#6988a6",
          400: "#376089",
          500: "#05386b",
          600: "#042d56",
          700: "#032240",
          800: "#02162b",
          900: "#010b15",
        },
      },
    },
  },
  plugins: [],
};
