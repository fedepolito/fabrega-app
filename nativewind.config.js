// nativewind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: 'bisque',
        primary: '#49129C',
        secondary: {
          DEFAULT: '#8E8CF0',
          100: '#C7C6F9',
          200: '#AEADEC',
        },
        tertiary: '#FF9500',
      },
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      },
    },
  },
}