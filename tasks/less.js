const gulp = require('gulp');
const less = require('gulp-less'),
  LessPluginCleanCSS = require('less-plugin-clean-css'),
  LessPluginAutoPrefix = require('less-plugin-autoprefix'),
  cleancss = new LessPluginCleanCSS({advanced: true}),
  autoprefix = new LessPluginAutoPrefix({
    browsers: [
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 35',
      'Firefox >= 31',
      'Explorer >= 9',
      'iOS >= 7',
      'Opera >= 12',
      'Safari >= 7.1'
    ]
  });
gulp.task('less', () => {
  return gulp.src(buildPath.less.src, {base: buildPath.less.base})
    .pipe(less({
      plugins: [autoprefix, cleancss]
    }))
    .pipe(gulp.dest(buildPath.dest));
});
