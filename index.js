let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  let x = Object.assign({}, obj);
  x[key] = value;
  return x;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){

  obj[key] = value;
  return obj;
}
