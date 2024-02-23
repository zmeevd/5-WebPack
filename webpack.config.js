const path = require("path"); //пакет node.js который работает с путмями
const HtmlWebpackPlugin = require("html-webpack-plugin"); //плагин

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
