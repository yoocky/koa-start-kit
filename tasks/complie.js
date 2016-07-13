const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('complie', () => {
	return gulp.src(buildPath.jsServer.src, {base: buildPath.jsServer.base})
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(buildPath.dest));
});
