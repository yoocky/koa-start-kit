const gulp = require('gulp');
const install = require('gulp-install');
gulp.task('install', () => {
  return gulp.src(['./../package.json'])
    .pipe(install());
});
