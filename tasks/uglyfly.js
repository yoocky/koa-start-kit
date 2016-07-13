const gulp = require('gulp');
const babelify = require('babelify');
const uglyfly = require('gulp-uglyfly');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const glob = require('glob');
// production
gulp.task('uglyfly', (cb) => {
  glob(buildPath.jsBrowser.src, (err, files) => {
    files.map((entry) => {
      const destBundle =  entry.replace(new RegExp('^' + buildPath.jsBrowser.base), buildPath.dest);
      browserify({ entries: [entry] })
      .transform(babelify)
      .bundle()
      .pipe(source(destBundle))
      .pipe(buffer())
      .pipe(uglyfly())
      .pipe(gulp.dest('./'));
    });
    cb();
  });
});

// dev
gulp.task('es5', (cb) => {
  glob(buildPath.jsBrowser.src, (err, files) => {
    files.map((entry) => {
      const destBundle =  entry.replace(new RegExp('^' + buildPath.jsBrowser.base), buildPath.dest)
      browserify({ entries: [entry] })
        .transform(babelify)
        .bundle()
        .pipe(source(destBundle))
        .pipe(gulp.dest('./'));
    });
  });
  cb();
});
