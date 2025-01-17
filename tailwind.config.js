/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4880FF",
        secondary: "#202224",
        tertiary: "#797A7C",
        light: {
          100: "#FFFFFF",
          200: "#F5F6FA"
        },
        dark: {
          100: "#273142",
          200: "#1B2431"
        }
      },
      width: {
        content: "280px"
      },
      height: {
        chart: "500px"
      },
      padding: {
        content: "280px"
      }
    },
  },
  plugins: [],
}
