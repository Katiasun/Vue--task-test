// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: '#eab308',
        white: '#ffffff',
        gray: '#57534d',
        'interactive-hover': '#ca8a04',
        'btn-primary-default': '#F44336',
        'btn-primary-hover': '#ca3500',
      },
      fontFamily: {
        custom: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
