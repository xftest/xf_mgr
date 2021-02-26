const mongoose = require('mongoose');
const { getMate } = require('../helpers');

// Schema 模式 ，映射了MongoDB下的一个集合，并且他的内容就是集合下文档的构成。
// Modal 模型，可以理解成是根据Schema生成的一套方法，用来操作MongoDB集合和集合下的文档。

const UserSchemas = new mongoose.Schema({
  account:String, //账户
  password:String,

  meta: getMate(),
})

// Schemas  定义好并注册成model之后就拥有了跟mongoDB去操作的能力。
mongoose.model('User', UserSchemas);
