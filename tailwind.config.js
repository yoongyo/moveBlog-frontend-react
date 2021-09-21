module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#2A3F54',
      'secondary': '#ededed',
    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#2A3F54',
      'secondary': '#334257',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#2A3F54',
      'fakeWhite': '#FFFFFE',
      'fakeBlack': '#010000',
      'danger': '#e3342f',
    })
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
