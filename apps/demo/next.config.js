const withTM = require("next-transpile-modules")(["some-ui"])
const withSomeUI = require('./with-some-ui')

module.exports = withTM(withSomeUI({}))
