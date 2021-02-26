const Koa = require('koa');
const KoaBody = require('koa-body');
const { connect } = require('./db');
const Router = require('./routers');
const app = new Koa();


// 第2种写法，使用await connect();
connect().then(()=>{
  Router(app);
  app.use(KoaBody());
  app.listen(3001,()=>{
    console.log('启动成功');
  })
})

