/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // my custom colors 
        'primary': '#1E2453', 
        'secondary': '#F9A524', 
        'third': '#374151', 
        'background': '#F3F4F6',
        'paragraph': '#7c7c82',
      },
      fontSize: {
        // my custom font sizes 
        's-xs': '0.75rem',
        's-sm': '0.875rem',
        'h3': '1.125rem', 
        's-lg': '1.25rem',
        'h2': '1.5rem',
        'h1': '2.5rem',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
 
 
}