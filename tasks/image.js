const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

gulp.task('image', () => {
  return gulp.src(buildPath.image.src, {base: buildPath.image.base})
    // .pipe(imagemin({
    //   progressive: true,
    //   svgoPlugins: [{removeViewBox: false}],
    //   use: [pngquant()]
    // }))
    .pipe(gulp.dest(buildPath.dest));
});
