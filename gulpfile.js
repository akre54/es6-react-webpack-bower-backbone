var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

gulp.task('default', function (cb) {
  webpack(webpackConfig, function(err, stats) {
    console.log(stats.toString({reasons: true, modules: true}));
    cb();
  });
  gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

