/** @type {import('tailwindcss').Config} */
import Typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      colors: {
        "sintio-black": "#141E21",
        "sintio-dark-blue": "#193260",
        "sintio-light-blue-1": "#5b9fd0",
        "sintio-light-blue-2": "#5b9fd0",
        "sintio-light-blue-3": "#41709e",
        "sintio-light-blue-4": "#91aec4",
        "sintio-light-grey": "#e6e6e6",
        "sintio-yellow": "#def34f",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: theme("sintio-yellow"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [Typography],
};
