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
      { test: /\.css$/,    loader: 'style-loader!css-loader' },

      // CoffeeScript
      { test: /\.coffee$/, loader: 'coffee-loader' },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf$/,    loader: 'file-loader?prefix=font/' },
      { test: /\.eot$/,    loader: 'file-loader?prefix=font/' },
      { test: /\.svg$/,    loader: 'file-loader?prefix=font/' },
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['', '.js', '.coffee']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/react$/, /\.\/bower_components\/react\/react\.js/),
    new webpack.ProvidePlugin({
      // Automatically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.ResolverPlugin([
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ])
  ]
};
