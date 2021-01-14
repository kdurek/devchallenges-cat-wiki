const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      black: 'black',
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      backgroundImage: {
        'hero-sm': "url('/HeroImagesm.png')",
        'hero-md': "url('/HeroImagemd.png')",
        'hero-lg': "url('/HeroImagelg.png')",
      },
      animation: {
        'to-left': 'to-left 0.3s ease-out forwards',
      },
      gridTemplateColumns: {
        '2-auto': 'auto auto',
        '2-info': '190px auto',
      },
      gridTemplateRows: {
        '2-auto': 'auto auto',
      },
    },
  },
  variants: {
    extend: {translate: ['group-hover'], backgroundColor: ['active']},
  },
  plugins: [],
};
