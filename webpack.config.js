const path = require("path");
const dist = path.resolve(__dirname, "dist");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./js/bootstrap.js",
  output: {
    path: dist,
    filename: "[name].[contenthash].js",
    publicPath: "https://funkyhippo.github.io/sandspiel/",
  },
  devServer: {
    contentBase: dist,
    disableHostCheck: true,
    publicPath: "/",
    historyApiFallback: true,
  },

  mode: "development",
  devtool: "source-map",
  plugins: [
    new WasmPackPlugin({ crateDirectory: path.resolve(__dirname, "crate") }),
    new CopyWebpackPlugin([
      "index.html",
      "js/styles.css",
      "manifest.json",
      "assets/*",
    ]),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/,
        use: "raw-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        use: "glslify-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },
    ],
  },
};
