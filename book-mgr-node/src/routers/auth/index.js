const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //如果没执行，直接引用，是拿不到modal的。 
const InviteCode = mongoose.model('InviteCode'); //如果没执行，直接引用，是拿不到modal的。 
const jwt = require('jsonwebtoken');

const { getBody } = require('../../helpers/utils');

const router = new Router({
  prefix:'/auth',
})

router.post('/register', async ( ctx )=>{
  const { 
    account, 
    password,
    inviteCode,
   } = getBody(ctx);

  if(account === ''  || password === '' || inviteCode === ''){
    ctx.body = {
      code: 0,
      msg: '字段不能为空',
      data: null,
    };
    return;
  }
  
  const findCode = await InviteCode.findOne({
    code: inviteCode,
  }).exec();

  // 如果没找到邀请码 或者 用户邀请码存在
  if( (!findCode) || findCode.user ){
    ctx.body = {
      code: 0,
      msg: '邀请码不正确',
      data: null,
    };
    return;
  }

  const findUser = await User.findOne({
    account
  }).exec(); // findOne条件，exec去执行查找

  if( findUser ){
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
  findCode.user  = res._id;
  findCode.meta.updatedAt = new Date().getTime();
  await findCode.save();


  ctx.body = {
    code: 1,
    msg: '注册成功',
  };
})

router.post('/login', async (ctx)=>{
  const { account, password } = getBody(ctx);
  if(account === ''  || password === ''){
    ctx.body = {
      code: 0,
      msg: '字段不能为空',
      data: null,
    };
    return;
  }
  
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