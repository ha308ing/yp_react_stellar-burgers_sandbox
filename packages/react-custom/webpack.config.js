const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
    static: path.join(__dirname, "dist"),
    client: {
      overlay: {
        warnings: false,
      },
    },
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true,
    }),
  ],
};
