/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pantone-orange': '#FF8200',
        'pantone-green': '#4CAF50',
        'pantone-blue': '#00B0CA',
      }
    },
  },
  plugins: [],
};
