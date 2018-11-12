const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // TODO: 지원범위 지정
  // entry: ["@babel/polyfill", path.resolve("./src/index.ts")],
  entry: path.resolve("./src/index.ts"),
  mode: "production",
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: {
          // TODO: 지원범위 지정
          // presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
          presets: ["@babel/preset-typescript", "@babel/preset-react"]
        },
        test: /\.(jsx?|tsx?)$/
      }
    ]
  },
  output: {
    filename: "dist.[name].js",
    path: path.resolve("./dist/"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  resolve: {
    // resolve.extensions에 선언된 확장자는 import 할 때 확장자명을 붙이지 않아도 됩니다
    // ex) import Person from "./Person.ts" -> import Person from "./Person"
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};
