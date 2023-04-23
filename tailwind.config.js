/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bai_Jamjuree: ["Bai Jamjuree", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "secondary-dark":
          "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 100%);",
        "main-theme":
          "linear-gradient(175.25deg, #9E44FF 3.56%, #543EFF 103.97%);",
      },
    },
  },
  plugins: [],
};
