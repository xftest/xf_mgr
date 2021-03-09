 const mongoose = require('mongoose');
 require('./Schemas/User'); // requirey一个文件，就会去执行一个文件,modal 就会被执行了。
 require('./Schemas/InviteCode'); // requirey一个文件，就会去执行一个文件,modal 就会被执行了。
// 1.给哪个数据库
// 2.哪个集合
// 3.添加什么格式的文档

/**
 * mongodb:数据库协议
 */
const connect =  () => {
  //  连接数据库 是异步操作, 
  // connect()调用会存在的问题：数据库连接是需要时间的，可能因为某些原因，连接10s，服务启动成功了，在这10s内有请求进来了，那这些请求就都挂掉了。
  // 解决办法：connect().then(()=>{ 做之后的事情了。})
  return new Promise((resolve)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr',{ useUnifiedTopology: true });
    mongoose.connection.on('open',()=>{
      console.log('数据库连接成功');
      resolve();
    });
  })
}

 module.exports = {
  connect,
 }