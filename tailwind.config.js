/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'rgb(250, 250, 250)',
        'neon-cyan': '#00ffe2',
        'neon-cyan-shadow': '#00ffe230',
        'neon-green': '#96ff00',
        'neon-pink': '#ff00c1',
        'dark': 'rgb(17, 24, 39)',
        'red': 'rgb(239, 68, 68)',
        'red-shadow': 'rgba(239, 68, 68, 0.6)',
      }
    },
  },
  plugins: [],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
}

