/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        'default-bg': '#1A1E22', // Set default background color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set default font
      },
    },
  },
  plugins: [],
};
