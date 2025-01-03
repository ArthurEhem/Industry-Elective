/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-custom": "pulse-custom 2s infinite", // Custom pulse animation
      },
      keyframes: {
        "pulse-custom": {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.05)", opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
};
