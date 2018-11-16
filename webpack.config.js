var webpack = require("webpack");
var path = require("path");

var plugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = {

  entry: ["./src/DateTimeField.js"],

  output: {
    path: path.join(__dirname, "/dist/"),
    library: "ReactBootstrapDatetimepicker",
    libraryTarget: "umd"
  },

  resolve: {
    extensions: [".js"]
  },

  externals: {
    "react": "React",
    "react/addons": "React",
    "react-bootstrap": "ReactBootstrap",
    "moment": "moment"
  },

  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  },

  plugins: plugins

};
