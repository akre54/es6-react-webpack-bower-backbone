var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

gulp.task('default', function (cb) {
  webpack(webpackConfig, function(err, stats) {
    console.log(stats.toString());
    cb();
  });
});

