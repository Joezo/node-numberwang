var numberwang = function(obj){
  obj = obj || '';
  if( obj instanceof Object && !(obj instanceof Date) ){
    for(var a in obj){
      if( obj.hasOwnProperty(a) ){
        obj[a] = numberwang(obj[a]);
      }
    }
    return obj;
  }

  if( typeof obj === 'string' && obj ){
    if( isNaN(obj-0) ){
      return obj;
    } else {
      return obj-0;
    }
  }
  return obj;
};

module.exports = numberwang;
