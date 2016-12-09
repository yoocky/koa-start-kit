const gulp = require('gulp');

gulp.task('pug', () => {
  return gulp.src(buildPath.pug.src, {base: buildPath.pug.base})
    .pipe(gulp.dest(buildPath.dest));
});
