'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// -----------------------------------------------------------------------------
// Dist
// -----------------------------------------------------------------------------

gulp.task('build', function() {
  return gulp
    .src([
      'src/_config.scss',
      'src/_handlers.scss',
      'src/_pow.scss',
      'src/_line-height.scss'
    ])
    .pipe(plugins.concat('_line-height-harmony.scss'))
    .pipe(gulp.dest('./dist'));
});

// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['build']);
