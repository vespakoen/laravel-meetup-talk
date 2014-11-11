var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');

gulp.task('js', function() {
    console.log('Heeey!');
  // browserify({
  //   cache: {},
  //   packageCache: {},
  //   fullPaths: false,
  //   insertGlobals: false,
  //   debug: true
  // }).bundle()
  //   .pipe(source('./main.js'))
  //   .on('error', console.log)
  //   .pipe(rename('bundle.js'))
  //   // .pipe(streamify(uglify()))
  //   .pipe(gulp.dest('./public/'));
});
