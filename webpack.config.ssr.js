var webpack = require("webpack")
var merge = require('webpack-merge')
var base = require('./webpack.config')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = merge(base, {
  target: 'node',
  output: {
    filename: 'ssr.js',
  },
})
