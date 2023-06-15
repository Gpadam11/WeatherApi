/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      slackside: ["Slackside One", "cursive"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      xs: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    width: {
      "50rem": "50rem",
      "70%": "70%",
      "28rem": "28rem",
      "64rem": "64rem",
      "56rem": "56rem",
      '1/2': '50%',
      "3rem": "3rem",
    },
    backgroundImage: {
      weather: "url('/src/images/backgroudimage.webp')",
      evening:"url('/src/images/micro_internships_banner_desktop_1920x1080.png')",
    },
    margin: {
      "30rem": "30rem",
      "24rem": "24rem",
      "5px": "5px",
      "1rem": "1rem",
      "5rem": "5rem",
      "15rem": "15rem",
      "10px": "10px",
    },
    height: {
      "35rem": "35rem",
      "100vh": "100vh",
      screen: "100vh", //100vh means 100% of the viewport height. for width we can use 100vw
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    theme: ["light", "cupcake", "dark"],
  },
};