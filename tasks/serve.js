const gulp = require('gulp');
const path = require('path');
const browserSync = require("browser-sync").create();
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');

gulp.task('watch', (cb) => {
  gulp.watch(buildPath.jsServer.src, ['complie']);
  gulp.watch(buildPath.less.src, ['less']);
  gulp.watch(buildPath.jade.src, ['jade']);
  gulp.watch(buildPath.template.src, ['template', 'es5']);
  gulp.watch(buildPath.jsBrowser.src, ['es5']);
  cb();
});

gulp.task('nodemon', (cb) => {
  nodemon({
    script: 'build/app.js',
    ext: 'js',
    watch: 'build/**',
    env: { 'NODE_ENV': 'development' }
  });
  cb();
});

gulp.task('browser-sync', (cb) => {
  browserSync.init({
    proxy: 'localhost:8080',
    port: 3000,
    files: [
     'build/**'
   ]
  });
  cb();
});

gulp.task('serve', (cb) => {
  runSequence(
    'nodemon',
    'browser-sync',
    'watch',
    cb
  );
});
