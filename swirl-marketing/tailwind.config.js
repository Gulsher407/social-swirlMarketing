/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'right-bottom': '5px 5px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    
  ],
}

