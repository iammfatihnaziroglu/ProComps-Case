const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
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
        card_default: {
          500: "#1C1C1C",
        },
        scroll: "#292929",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
