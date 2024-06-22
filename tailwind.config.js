// eslint-disable-next-line
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        impact: "Impact",
      },
      colors: {
        mainpink: "#ff2c60ed",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        256: "64rem",
      },
    },
    screens: {
      xss: "250px",

      xs: "375px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2000px",
    },
  },
  plugins: [],
};
