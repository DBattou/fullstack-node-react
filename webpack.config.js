const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js"
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      }
    ]
  }
};
