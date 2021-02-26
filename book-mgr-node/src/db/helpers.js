const getMate = () => {
  return {
    // 创建时间
    createdAt:{ 
      type:Number,
      default :(new Date()).getTime(),
    },
    // 更新
    updatedAt : {
      type:Number,
      default :(new Date()).getTime(),
    },
  }
};

module.exports= {
  getMate,
};