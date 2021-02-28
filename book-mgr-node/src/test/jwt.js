var jwt = require('jsonwebtoken');
/**
 * sign
 * @param 内容， 密钥,后端根据密钥解密
 */
var token = jwt.sign({foot:'bar'},'secret');

console.log(token);


// 解密
jwt.verify(token,'secret',( err, payload )=>{
  console.log(err, payload);
})