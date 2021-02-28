const Koa = require('koa');
const cors = require('@koa/cors');
const KoaBody = require('koa-body');
const { connect } = require('./db');
const Router = require('./routers');
const app = new Koa();

/**
 * 跨域：只在浏览器下，非相同域名、协议、端口号，就会提示跨域。
 * Access-Controller-Allow-Origin  访问控制器 允许域名 
 * 
 * 解决跨域办法：cors、jsonp、
 */
// 第2种写法，使用await connect();
connect().then(()=>{
  app.use(cors());
  app.use(KoaBody())

  Router(app);

  app.listen(3000,()=>{
    console.log('启动成功');
  })
})

