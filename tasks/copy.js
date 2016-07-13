const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('copyNodeModules', () => {
  return gulp.src(buildPath.nodeModules.src, {base: buildPath.nodeModules.base})
    .pipe(gulp.dest(buildPath.dest));
});

gulp.task('copyPm2', () => {
  return gulp.src(buildPath.pm2.src, {base: buildPath.pm2.base})
    .pipe(gulp.dest(buildPath.dest));
});

gulp.task('copy', (cb) => {
  runSequence(
    'copyNodeModules',
    'copyPm2',
    cb
  );
});
