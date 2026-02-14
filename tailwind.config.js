/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ,".presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        fondo: 'bisque',
        primary: '#49129C',
        secondary: {
          default : '#8E8CF0',
          100 : '#C7C6F9',
          200 : '#AEADEC',
        },
        tertiary: '#FF9500',
      },
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
    }
  },
  plugins: [],
}
}
