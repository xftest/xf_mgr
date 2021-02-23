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

