/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "purple-primary": "#635FC7",
      "purple-light": "#A8A4FF",
      black: "#000112",
      "black-light": "#20212C",
      "grey-dark": "#2B2C37",
      "grey-light": "#3E3F4E",
      "grey-scale": "#828FA3",
      neutral: "#E4EBFA",
      "neutral-light": "#F4F7FD",
      white: "#FFFFFF",
      "danger-solid": "#EA5555",
      "danger-hover": "#FF9898",
    },
    fontFamily: {
      plus: "Plus Jakarta Sans, sans-serif",
    },
  },
  plugins: [],
};
