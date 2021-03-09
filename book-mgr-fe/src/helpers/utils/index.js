import { message, } from 'ant-design-vue';

export const result = (response, authShowErrorMsg=true ) => {
  const { data } = response;

  if(( data.code ===0 ) && authShowErrorMsg){
    message.error(data.msg);
  }

  return {
    success(cb){
      if(data.code !== 0){
        cb(data,response);
      }
      return this;
    },
    fail(cb){
      if(data.code === 0){
        cb(data,response);
      }
      return this;
    },
    finally(cb){ //无论通过 还是不通过，都会执行
      cb(data,response);
      return this;
    }
  }
}