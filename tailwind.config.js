module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#2A3F54',
      'secondary': '#ededed',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
