let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  let x = Object.assign({}, obj);
  x[key] = value;
  return x;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){

  let x = Object.assign(obj, key, value);
  return x;
}
