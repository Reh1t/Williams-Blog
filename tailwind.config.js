/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#003660",
        darkslategray: "#424242",
        black: "#000",
        darkblue: "#3a0ca3",
        palevioletred: "#d05270",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      "23xl": "42px",
      "10xl": "29px",
      "17xl": "36px",
      "3xl": "22px",
      "6xl": "25px",
      "15xl": "34px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
