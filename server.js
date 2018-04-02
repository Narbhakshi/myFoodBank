var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");



var config = require('./webpack.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {

  clientLogLevel: "info",

  filename: "client.min.js",

  // It's a required option.
  publicPath: "/src/",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },


});
server.listen(process.env.PORT || 8008, '0.0.0.0', function() {});
// server.close();