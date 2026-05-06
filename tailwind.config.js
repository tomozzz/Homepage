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
        soft: "0 24px 60px rgba(15, 23, 42, 0.08)",
        float: "0 24px 48px rgba(8, 145, 178, 0.14)"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "sans-serif"],
        display: ["Source Serif 4", "ui-serif", "serif"]
      }
    }
  },
  plugins: []
};

