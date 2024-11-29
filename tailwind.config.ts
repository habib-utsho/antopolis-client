import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8F71E1",
          50: "##F6F5FD",
          100: "#EEECFB",
          200: "#E0DCF8",
          300: "#C8BFF3",
          400: "#AC9AEB",
          500: "#8F71E1",
          600: "#7E53D4",
          700: "#6F42C1",
          800: "#5C36A1",
          900: "#4D2E84",
          950: "#2F1C59",
        },
        pinky: "#ece9fe",
        gray: "#656565",
        black: "#1D1D1D",
        white: "#FFFFFF",
        paragraph: {
          DEFAULT: "#333333", // Dark gray for paragraphs
        },
        secondary: {
          DEFAULT: "#A4D65E", // Soft red for secondary actions
          // DEFAULT: "#ffd700", // Soft red for secondary actions
          // DEFAULT: "#D1C4E9", // Soft red for secondary actions
        },
        accent: {
          DEFAULT: "#FFC107", // A vibrant yellow for accents
        },
        danger: {
          DEFAULT: "#FF4E3E", // A strong red for danger
        },
        warning: {
          DEFAULT: "#FFA500", // Orange for warning messages
        },
        success: {
          DEFAULT: "#17BD8D", // Green for success messages
        },
        important: {
          DEFAULT: "#FFCC00", // Bright yellow for important notices
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
