const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
      colors: {
        neutrals: {
          50: "#F7F8FC",
          300: "#25252E",
          400: "#05061A",
        },
        lime: {
          100: "#E7F6E2",
          300: "#32592D",
        },
        scaling: {
          green: "#19AB4F",
          orange: "#CE6C21",
          red: "#C24B4B",
          gray: "#5D5D5D",
          white: "#D9D9D9",
        },
        delete: {
          gray: "#292929",
          red: "#FF0000",
          border: "#2D2D2D",
        },
        card_default: {
          500: "#1C1C1C",
        },
        procomps: "#06D6BE",
        procomps_dark: "#07C5AF",
        scroll: "#292929",
        builder: "#5E5E5E",
        compName: {
          gray: "#1C1C1C",
          white: "#DADEE3 ",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    [require("tailwind-scrollbar")],
    [flowbite.plugin()],
  ],
};
