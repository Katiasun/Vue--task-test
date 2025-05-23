// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'btn-primary': ' rgb(220 38 38)',
      },
      fontFamily: {
        'main-page': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
