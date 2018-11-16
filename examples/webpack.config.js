var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    "basic": "./examples/basic/basic.js"
  },

  output: {
    path: __dirname,
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    sourceMapFilename: "[name].map",
    publicPath: "/"
  },

  resolve: {
    alias: {
      "react-bootstrap-datetimepicker": "../../src/DateTimeField"
    },
    extensions: [".js"]
  },

  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  },


  devServer: {
    contentBase: "examples/",
    stats: {colors: true}
  },

  devtool: "eval-source-map",
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "/basic/index.html")
  })]

};
