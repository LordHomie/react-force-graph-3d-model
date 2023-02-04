const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
          },

          {
            loader: "file-loader",
          },
        ],
        type: "javascript/auto",
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
