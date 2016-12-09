global.buildPath = {
  dest: './build',
  pug: {
    src: './src/views/**/*.pug',
    base: './src'
  },
  less: {
    src: './src/static/css/**/*.less',
    base: './src'
  },
  image: {
    src: './src/static/images/**/*.*',
    base: './src'
  },
  jsBrowser: {
    src: './src/static/js/**/*.js',
    base: './src'
  },
  jsServer: {
    src: ['./src/app.js', './src/routes/**/*.js', './src/config/**/*.js'],
    base: './src'
  },
  nodeModules: {
    src: './node_modules/**/*.js',
    base: './'
  },
  pm2: {
    src: './src/process.*.json',
    base: './src'
  }
};
global.zipPath = {
  src: './build/**/*.*',
  dest: './target'
};
