const { merge } = require("webpack-merge");

const { baseConfig } = require("./webpack.common.js");

//清理掉上一次打包
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CssMinimizeWebpackPlugin = require('css-minimizer-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CssMinimizeWebpackPlugin(), //未css加上前缀，---web这种
    new CleanWebpackPlugin()]
});
