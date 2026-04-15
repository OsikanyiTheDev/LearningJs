function bouncer(array){
  let result = [];
  for(const item of array){
    if(item){
      result.push(item)
    }
  }
  return result;
}