require('./config');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const fs = require('fs');
const tasks = fs.readdirSync('./tasks/');

tasks.forEach((task) => {
  require('./tasks/' + task);
});

// node 环境设置  开发环境
gulp.task('set-dev-node-env', () => {
  return process.env.NODE_ENV = 'development';
});

// node 环境设置  生产环境
gulp.task('set-prod-node-env', () => {
  return process.env.NODE_ENV = 'production';
});

// 部署生产打包前编译并打包
gulp.task('build', (cb) => {
  runSequence(
    'install',
    'clean',
    'complie',
    'jade',
    'template',
    'image',
    'less',
    'uglyfly',
    'copy',
    'tar',
    cb
  );
});

// 开发调试
gulp.task('dev', (cb) => {
  runSequence(
    'set-dev-node-env',
    'clean',
    'complie',
    'jade',
    'template',
    'image',
    'less',
    'es5',
    'serve',
    cb
  );
});

gulp.task('build-for-dev', ['set-dev-node-env'], (cb) => {
  runSequence(
    'build',
    cb
  );
});

gulp.task('build-for-production', ['set-prod-node-env'], (cb) => {
  runSequence(
    'build',
    cb
  );
});
// rolling 打包
gulp.task('default', (cb) => {
  runSequence(
    'build-for-production',
    cb
  );
});
