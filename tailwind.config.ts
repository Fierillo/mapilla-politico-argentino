/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-sky-500",
      "bg-sky-700",
      "bg-sky-200",
      "bg-purple-500",
      "bg-purple-700",
      "bg-purple-200",
      "bg-red-500",
      "bg-red-700",
      "bg-red-200",
      "bg-yellow-500",
      "bg-yellow-700",
      "bg-yellow-200",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }