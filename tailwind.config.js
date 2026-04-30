/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      colors: {
        brand: {
          bg: "#0B0B0B",
          orange: "#FF5A1F",
          gray: "#A0A0A0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "driver-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "driver-marquee": "driver-marquee 40s linear infinite",
      },
      boxShadow: {
        "glow-orange": "0 0 20px rgba(255, 90, 31, 0.4)",
        "glow-white": "0 0 20px rgba(255, 255, 255, 0.2)",
      },
      dropShadow: {
        "glow": "0 0 10px rgba(255, 90, 31, 0.6)",
      },
    },
  },
  plugins: [],
};
