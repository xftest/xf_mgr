const Koa = require('koa');

const app = new Koa();

// 浏览器每次请求进来，中间件都会被执行
// context 上下文 - 当前请求的相关信息都在里面
app.use(async (context,next)=>{
  const { request:req } = context;
  const { url } = req;
  if(url === '/'){
    context.response.body='<h1>主页</h1>';
    return ;
  }
  if(url === '/user/list'){
    context.response.body='<h1>主页</h1>';
    return ;
  }

  context.response.body="404";
  
  await next(); // 使用next()就会马上执行下一个中间件， 

  context.response.status="404"; //当前next执行结束后 执行这一句。
})

app.use(async (context,next) => {
  console.log(2);
  context.body='找不到资源';
})


/**
 * Promise 移步
 * @param {*} resolve,reject  表示当前的promise 被实例化的时候，立即执行的内容
 * @param {*} Promise.then 手动return结果 或 默认return Promise.resolve(); 理解为成功
 * @param {*} Promise.catch 
 */

const request = (arg,isReject) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(isReject){
        reject('出错啦');
        return false;
      }
      resolve(arg+1)
    },1000)
  })
}

request(1)
.then((res1)=>{
  return request(res1,true);
})
.catch((msg)=>{
  console.log(msg);
})
.then((res2)=>{
  console.log(6666); //即使上面 走catch， 此处也会执行
  return request(res2);
})
.then((res3)=>{
  return request(res3); 
})

/**
 * async函数
 * @returns  Promise, 等待当前await的Promise 是resoleve还是reject，才会走下面的代码。
 */

const fn = async () =>{
  const res1 = await request(10);
  const res2 = await request(res1);
  const res3 = await request(res2);
  console.log(res3);
  return 1;
}
fn();








app.listen(3000,()=>{
  console.log('启动成功');
})


// 宏任务：是由浏览器规定的，DOM渲染后触发，setTimeout   setInterval   ajax  dom 
// 微任务：是ES6语法规定的，DOM渲染前触发，promise async/await
// 微任务执行时机比宏任务早



/**
 * HTTP
 * 不能维持状态， 请求一来一回就结束了。
 */

 /**
  * Session
  * 将一串可以找到身份信息标记 记在cookie中，同时服务器根据这段标记记录对应的用户信息
  * 每次请求来都通过cookie取到后标记，并且标记找到记录在服务器的用户信息
  * 
  * 应用程序分布式部署的情况下，session需要做多机数据共享，通常可以存在数据库或者redis里面。
  * 区别： Session是保存在服务端的, 
  */

  /**
   * JSON Web Token  - JWT
   * 将用JSON表示 的用户信息进行编码加密
   * 前端取到后存储在本地
   * 每次请求带上加密后的信息
   * 服务端拿到后再进行解密，取到信息
   * 
   * 缺点：做登出麻烦. 安全性较差，不能存储敏感数据。
   * 优点：有效地使用 JWT，可以降低服务器查询数据库的次数，
   * 区别：JWT是保存在客户端的，适合使用jwt的场景：有效期短，只希望被使用一次
   * 
   */

  // RESTful API的原则之一是无状态，
