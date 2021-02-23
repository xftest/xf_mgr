 const mongoose = require('mongoose');
// 1.给哪个数据库
// 2.哪个集合
// 3.添加什么格式的文档

// Schema 模式 ，映射了MongoDB下的一个集合，并且他的内容就是集合下文档的构成。
// Modal 模型，可以理解成是根据Schema生成的一套方法，用来操作MongoDB集合和集合下的文档。

const UserSchema = new mongoose.Schema({
  nickname:String,
  password:String,
  age:Number,
});

const UserModal = mongoose.model('User',UserSchema);




//  mongodb 是数据库协议，连接mongo 数据库必须带上mongodb
 const connect = () => {
  //  连接数据库
   mongoose.connect('mongodb://127.0.0.1:27017/book-mgr',{ useUnifiedTopology: true });
  //  当数据库被打开的时候，做一些事情
   mongoose.connection.on('open',()=>{
     console.log('数据库连接成功');
     const user = UserModal({
      nickname:'翔飞',
      password:'xiangfei3693',
      age:24,
     })
     user.save();
   });
 }

 connect();