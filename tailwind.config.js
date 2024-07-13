/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.html",
    "./src/**/*.{js,jsx,tsx,svelte,ts}",
  ],
  theme: {
    extend: {fontFamily: {
      imenglish: ['IM Fell English'],
    }},
  },
  plugins: [],
}

