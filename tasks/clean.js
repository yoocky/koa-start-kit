const gulp = require('gulp');
const del = require('del');

gulp.task('clean', (cb) => {
  console.log('Cleaning Path: ' + buildPath.dest);
  del.sync(buildPath.dest + '/*', {
    force: true
  });
  console.log('Cleaning Path: ' + zipPath.dest);
  del.sync(zipPath.dest + '/*', {
    force: true
  });
  cb();
});
