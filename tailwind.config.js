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
      'primary': '#202020',
      'secondary': '#334257',
     }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
