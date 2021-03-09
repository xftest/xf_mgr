const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');
const Books = mongoose.model('Books'); 

const router = new Router({
  prefix:'/books',
})

router.post('/add', async ( ctx )=>{
  const { name, price, authur, publishDate, classify } = getBody(ctx);
  const books = new Books({
    name, price, authur, publishDate, classify
  })
  const saved = await books.save();
  ctx.body = {
    code: 1,
    data: saved,
    msg: '添加成功',
  };
})

router.get('/list', async ( ctx )=>{
  const list = await Books.find().exec();
  ctx.body = {
    code: 1,
    data: list,
    msg: '获取列表成功',
  };
})

module.exports = router;