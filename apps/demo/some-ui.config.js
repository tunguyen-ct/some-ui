const theme = require('some-ui/src/theme/default-theme')
// const theme = require('some-ui/src/theme')

module.exports = {
  theme: {
    ...theme,
    colors: {
      ...theme.colors,
      primary: "blue",
      text: "green"
    },
  },
}
