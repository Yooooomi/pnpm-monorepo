const { override, babelInclude, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  babelInclude([path.resolve("src"), path.resolve("../shared/src")]),
  addWebpackAlias({ "react-native$": "react-native-web" })
);
