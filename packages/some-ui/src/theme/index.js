const defaultTheme = require("./default-theme")

function resolveTheme() {
  let userTheme = {}
  if (typeof window === "undefined") {
    const cosmiconfig = require("cosmiconfig")
    const explorer = cosmiconfig.cosmiconfigSync("some-ui")
    const result = explorer.search()
    if (result) {
      userTheme = result?.config?.theme || {}
    }
  }
  return { ...defaultTheme, ...userTheme }
}

const theme = resolveTheme()

// console.log(theme)

module.exports = theme
