const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // TODO: 지원범위 지정
  // entry: ["@babel/polyfill", path.resolve("./src/index.ts")],
  entry: path.resolve("./src/index.ts"),
  resolve: {
    // resolve.extensions에 선언된 확장자는 import 할 때 확장자명을 붙이지 않아도 됩니다
    // ex) import Person from "./Person.ts" -> import Person from "./Person"
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    publicPath: "/",
    path: path.resolve("./dist/"),
    filename: "dist.[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        loader: "babel-loader",
        options: {
          // TODO: 지원범위 지정
          // presets: ["@babel/preset-env", "@babel/preset-typescript"]
          presets: ["@babel/preset-typescript"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
