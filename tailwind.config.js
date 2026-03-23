/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f8f1e7",
        clay: "#d97757",
        pine: "#1f5f5b",
        ink: "#111214",
        mist: "#f5f5f6",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(20, 32, 43, 0.14)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        display: ["DM Serif Display", "serif"],
      },
      backgroundImage: {
        "soft-mesh":
          "radial-gradient(circle at top left, rgba(217, 119, 87, 0.24), transparent 30%), radial-gradient(circle at right top, rgba(31, 95, 91, 0.18), transparent 24%), linear-gradient(180deg, #fff8ef 0%, #f8f1e7 50%, #fffdf8 100%)",
      },
    },
  },
  plugins: [],
};
