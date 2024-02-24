const path = require("path"); //пакет node.js который работает с путмями
const HtmlWebpackPlugin = require("html-webpack-plugin"); //плагин
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loder"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //Путь откуда брать, заработало
      filename: "./main.html", // Переименовать , не забывать ./
    }),
    new MiniCssExtractPlugin({
      filename: "./name.css",
    }),
  ],
};
