const gulp = require('gulp');
const jade = require('gulp-jade');
const defineModule = require('gulp-define-module');

gulp.task('template', () => {
  return gulp.src(buildPath.template.src, {base: buildPath.template.base})
    .pipe(jade({
      client: true
    }))
    .pipe(defineModule('hybrid'))
    .pipe(gulp.dest(buildPath.template.base));
});
