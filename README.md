# koa2-start-kit
koa2 start kit is an opinionated boilerplate for web development built on top of Node.js, koa2. Containing modern web development tools such as gulp, Babel , less, jade, jadeTemplete, browserify, Babel and Browsersync nodemon. Helping you to stay productive following the best practices. A solid starting point for both professionals and newcomers to the industry.

## Npm scripts

```bash
$ npm start # 开发模式, 开启开发模式之后对于 /src 目录内的任何改动会自动热替换生效
$ npm run build # build
$ npm run compile # 编译
$ npm run production # 生产模式
```



## 线上部署

```bash
gulp                                                  # 部署 prod
gulp build-for-dev                                    # 部署 dev
vim pm2.json                                          # 检查 pm2 的配置
pm2 start process.production.json                     # 请确保已经 global 安装 pm2    (npm i pm2-cli -g)
cp nginx.conf /etc/nginx/conf.d/YourProject.conf      # 自行配置 nginx 反代
```



## 配置文件的 trick

引用配置的方式:

```javascript
import config from './config'
```

koa2 根据node.env.NODE_ENV 载入不同的配置文件


## 目录结构说明

```bash
.
|____.babelrc
|____.eslintrc
|____.gitignore
|____config.js                         # buidPath 配置文件
|____gulpfile.js                       # gulp task 入口及组合任务文件
|____History.md
|____package.json
|____README.md
|____src                               #  项目源文件目录
| |____app.js
| |____config
| | |____development.js
| | |____index.js
| | |____production.js
| |____process.production.json
| |____process.rc.json
| |____process.sep.json
| |____routes
| | |____demo
| | | |____controller.js
| | | |____index.js
| | |____index.js
| |____static
| | |____css
| | | |____common.less
| | | |____demo
| | | | |____page.less
| | |____images
| | | |____.DS_Store
| | | |____demo
| | | | |____.DS_Store
| | | | |____helloword.jpg
| | |____js
| | | |____demo
| | | | |____page1.js
| | | | |____page2.js
| | |____template
| | | |____demo
| | | | |____tpl.jade
| | | | |____tpl.js
| |____views
| | |____404.jade
| | |____500.jade
| | |____demo
| | | |____page.jade
| | |____index.jade
| | |____layout
| | | |____default.jade
|____tasks
| |____clean.js                         # 清空目录
| |____complie.js                       # 编译serve端js
| |____copy.js                          # copy指定文件
| |____image.js                         # 压缩图片
| |____install.js                       # 检测安装npm依赖
| |____jade.js                          # copy jade文件
| |____less.js                          # 编译less
| |____serve.js                         # 开发环境启动 nodemon browser-sync watch 文件改动
| |____tar.js                           # 打包编译后的文件目录
| |____template.js                      # 编译前端的jade模板
| |____uglyfly.js                       # 编译、打包、压缩js文件

```
# license

Made with ♥ by yoocky(mengyanzhou@gmail.com) and victor
