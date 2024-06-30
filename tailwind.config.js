/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arizona': ['ArizonaFlare', 'sans-serif'],
      },
      colors: {
        'primary': '#FF6B6B', // A vibrant red similar to daylightcomputer.com
        'secondary': '#4ECDC4', // A teal color for contrast
        'accent': '#FFD93D', // A yellow for highlights
        'background': '#FFFFFF', // White background
        'text': '#2C3E50', // Dark blue for text
      },
    },
  },
  plugins: [],
}