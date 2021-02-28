const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //如果没执行，直接引用，是拿不到modal的。 

const router = new Router({
  prefix:'/auth',
})

router.post('/register', async ( ctx )=>{
  const { account, password } = ctx.request.body;
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
  ctx.body= "登录接口";
})

module.exports = router;