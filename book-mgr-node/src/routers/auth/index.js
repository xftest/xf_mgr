const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User'); //如果没执行，直接引用，是拿不到modal的。 

const router = new Router({
  prefix:'/auth',
})

router.post('/register', async (ctx)=>{
  console.log(ctx.request.body)
  // const userInfo = new User({
  //   account:'', 
  //   password:'',
  // });

  // const res = await userInfo.save();
  // ctx.body = {
  //   code: 1,
  //   msg:'注册成功',
  //   data:res,
  // }
})

router.post('/login', async (ctx)=>{
  ctx.body= "登录接口";
})

module.exports = router;