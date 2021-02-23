const getYearByTimeStamp = (ts)=>{
  return new Date(ts).getFullYear();
}

const getDateByTimeStamp = (ts)=>{
  return new Date(ts).getDate();
}


module.exports = {
  getYearByTimeStamp,
  getDateByTimeStamp
}