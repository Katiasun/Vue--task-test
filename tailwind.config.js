// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    'text-yellow-400',
    'bg-yellow-600',
    'hover:bg-yellow-700',
    'text-pink-400',
    'bg-pink-600',
    'hover:bg-pink-700',
    'text-indigo-400',
    'bg-indigo-600',
    'hover:bg-indigo-700',
    'text-purple-400',
    'bg-purple-600',
    'hover:bg-purple-700',
    'text-red-400',
    'bg-red-600',
    'hover:bg-red-700',
    'text-green-400',
    'bg-green-600',
    'hover:bg-green-700',
    'text-teal-400',
    'bg-teal-600',
    'hover:bg-teal-700',
    'text-orange-400',
    'bg-orange-600',
    'hover:bg-orange-700',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: {
          DEFAULT: '#eab308', // Це буде використовуватися, якщо ви пишете просто 'text-yellow' або 'bg-yellow'
          400: '#facc15', // Приклад світлого відтінку жовтого (можете використовувати свій #eab308)
          500: '#eab308', // Ваш основний жовтий
          600: '#d9a008', // Трохи темніший
          700: '#b4860b',
        },
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
