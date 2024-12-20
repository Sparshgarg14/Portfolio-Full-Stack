/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#080808',          // Background color
        'second-bg-color': '#1b0000',  // Secondary background color
        'text-color': '#ffffff',       // Text color
        'main-color': '#f60b0b',       // Main accent color
      },
    },
  },
  plugins: [],
}