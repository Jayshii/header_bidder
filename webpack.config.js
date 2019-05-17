const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./templates/bidexchange.js", // Entry File
    output: {
      path: path.resolve(__dirname, "dist"), //Output Directory
      filename: "hb.js", //Output file
 }};