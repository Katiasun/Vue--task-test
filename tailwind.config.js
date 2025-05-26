// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'primary-yellow': '#eab308',
        'yellow-hover': '#ca8a04',
        white: '#ffffff',
        'btn-primary': '#F44336',
        'btn-hover-primary': '#ca3500',
        gray: '#57534d',
      },
      fontFamily: {
        custom: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
