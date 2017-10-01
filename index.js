let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  let x = Object.assign({}, obj);
  x[key] = value;
  return x;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return let x = Object.assign(obj, key, value);
}
