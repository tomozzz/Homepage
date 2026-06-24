/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#f8fbfd",
        ink: "#0f172a",
        mist: "#e6f3f8",
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490"
        }
      },
      boxShadow: {
        soft: "0 16px 44px rgba(15, 23, 42, 0.07)",
        float: "0 18px 42px rgba(8, 145, 178, 0.12)"
      },
      fontFamily: {
        sans: ["Manrope", "Noto Sans JP", "ui-sans-serif", "sans-serif"],
        display: ["Source Serif 4", "Noto Serif JP", "ui-serif", "serif"]
      }
    }
  },
  plugins: []
};
