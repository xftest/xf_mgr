const mongoose = require('mongoose');
const { getMate } = require('../helpers');


const BooksSchemas = new mongoose.Schema({
  name: String, // 书名
  price: Number, // 价格
  authur: String, // 作者
  publishDate: Number, // 出版日期
  classify: String, // 分类
  meta: getMate(),
})

mongoose.model('Books', BooksSchemas);
