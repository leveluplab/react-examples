// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "server-dist"),
    filename: 'server.js'
  },
  plugins: [
    
  ],
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
     
    ],
  },
  resolve: {
    extensions: [".js", ".json"]
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
