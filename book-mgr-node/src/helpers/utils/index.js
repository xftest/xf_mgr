const getYearByTimeStamp = (ts)=>{
  return new Date(ts).getFullYear();
}

const getDateByTimeStamp = (ts)=>{
  return new Date(ts).getDate();
}

const getBody = (ctx)=>{
  return ctx.request.body || {};
}


module.exports = {
  getYearByTimeStamp,
  getDateByTimeStamp,
  getBody,
}