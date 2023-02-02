const { merge } = require("webpack-merge");
// 导入基础配置
const { baseConfig } = require("./webpack.common.js");

const EslintPlugin = require('eslint-webpack-plugin')
//清理掉上一次打包
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: "development",
  // 便于开发调试 这里开启source-map模式
  devtool: "source-map",
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: "127.0.0.1",
    // 端口
    port: 8000,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
  },
  plugins: [new FriendlyErrorsWebpackPlugin(),new EslintPlugin({
    fix: true, //开启eslint修复特性
    extensions: ['js','ts','tsx'],//需要检测的文件
    exclude: ['/node_modules/', '/eslintrc.js/','/dist/']
  })],
});
