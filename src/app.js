import http from 'http';
import Koa from 'koa';
import path from 'path';
import views from 'koa-views';
import convert from 'koa-convert';
import json from 'koa-json';
import Bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import koaStatic from 'koa-static-plus';
import koaOnError from 'koa-onerror';
import config from './config';
import routes from './routes';

const app = new Koa();
const bodyparser = Bodyparser();

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

// static
app.use(convert(koaStatic(path.join(__dirname, './static'), {
  pathPrefix: '/static'
})));

// views
app.use(views(path.join(__dirname, './views'), {
  extension: 'jade'
}));

// 500 error
koaOnError(app, {
  template: path.join(__dirname, './views/500.jade')
});

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response router
app.use(async (ctx, next) => {
  await routes.routes()(ctx, next);
});

// 404
app.use(async (ctx) => {
  ctx.status = 404;
  await ctx.render('404');
});

// error logger
app.on('error', async (err, ctx) => {
  console.log('error occured:', err);
});

const port = parseInt(config.port || '3000');
const server = http.createServer(app.callback());

server.listen(port);
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', () => {
  console.log('Listening on port: %d', port);
});

export default app;
