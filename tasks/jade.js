const gulp = require('gulp');

gulp.task('jade', () => {
  return gulp.src(buildPath.jade.src, {base: buildPath.jade.base})
    .pipe(gulp.dest(buildPath.dest));
});
