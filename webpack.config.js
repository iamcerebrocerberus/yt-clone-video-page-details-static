const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./styles/scss/main.scss",
  context: path.resolve(__dirname, "src"),

  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].mini.css",
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: ["../dist/main.js"],
        },
      },
    }),
  ],
};
