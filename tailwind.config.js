/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        'default-bg': '#1A1E22', // Set default background color
        'custom-hover': 'rgba(252, 252, 252, 0.20)',
      },
      borderColor: {
        custom: '#333B43', // Custom border color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set default font
      },
      boxShadow: {
        'custom-hover': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // Custom box shadow
      },
    },
  },
  plugins: [],
};
