/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hflip: {
          "0%": { opacity: '0' },
          "100%": { opacity: '100' },
        },
      },
      animation: {
        hflip: "hflip 0.5s ease-in-out",
      },
    },
  },
  plugins: [backfaceVisibility],
};

