const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //如果没执行，直接引用，是拿不到modal的。 
const jwt = require('jsonwebtoken');

const { getBody } = require('../../helpers/utils');

const router = new Router({
  prefix:'/auth',
})

router.post('/register', async ( ctx )=>{
  const { account, password } = getBody(ctx);
  const one = await User.findOne({account}).exec(); // findOne条件，exec去执行查找
  if( one ){

    ctx.body = {
      code: 0,
      msg: '该用户已注册，请登录',
      data: null,
    };
    return;
  }
  const userInfo = new User({
    account, 
    password,
  });

  const res = await userInfo.save();
  ctx.body = {
    code: 1,
    msg: '注册成功',
  };
})

router.post('/login', async (ctx)=>{
  const { account, password } = getBody(ctx);
  const one = await User.findOne({ account }).exec();
  if(!one){
    // 判断有没有用户名
    ctx.body = {
          code: 0,
          msg: '用户名或密码错误',
          body: null,
        }
    return;
  }
  const user = {
    account: one.account,
    _id: one._id,
  }
  if(one.password === password){
    ctx.body = {
      code: 1,
      msg: '登录成功',
      body: {
        user,
        token: jwt.sign(user,'book-mgr'),
      },
    }
    return;
  }

  ctx.body = {
    code: 0,
    msg: '用户名或密码错误',
    body: null,
  }
})

module.exports = router;