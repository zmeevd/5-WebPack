const path = require("path"); //пакет node.js который работает с путмями
const HtmlWebpackPlugin = require("html-webpack-plugin"); //плагин
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //плагин для css

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //Путь откуда брать, заработало
      filename: "./html.html", // Переименовать , не забывать ./
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
