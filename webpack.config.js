const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    port: "3000",
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlwebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
