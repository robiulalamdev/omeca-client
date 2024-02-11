/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0E",
        secondary: "#999EAB",
        royalBlue: "#1765FC",
      },
      boxShadow: {
        prompts: " 0px 2px 6px 0px rgba(0, 0, 0, 0.12)"
      }
    },
  },
  plugins: [],
};
