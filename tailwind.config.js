/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alexandria: [
          "Alexandria",
          "Amiri",
          "serif",
          "Lateef",
          "serif",
          "Poppins",
          "sans-serif",
        ],
      },
      colors: {
        mcolr: ["#205aae"],
        scolor: ["#bcd700"],
      },
    },
  },
  plugins: [],
};
