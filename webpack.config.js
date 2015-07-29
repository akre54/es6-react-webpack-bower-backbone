var path = require('path'),
    webpack = require('webpack');

module.exports = {
  cache: true,
  debug: true,
  entry: {
    app: './app/app'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      // required to write 'require('./style.css')'
      { test: /\.css$/, loader: 'style!css' },

      { test: /\.js$/, loader: 'babel' },

      // required for bootstrap icons
      { test: /\.woff$/, loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file?prefix=font/' },
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automatically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery'
    }),
  ]
};
