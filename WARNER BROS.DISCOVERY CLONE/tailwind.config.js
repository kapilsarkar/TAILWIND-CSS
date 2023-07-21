/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens:{
        'media1220': '1220px',
        'media360': '360px',
        'media1072': '1072px',
      },
    },
  },
  plugins: [],
}

