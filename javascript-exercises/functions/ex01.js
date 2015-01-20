// array.indexOf()

var array1 = ['a','b','c','d','e']

function getIndex(array, value){
  if (!Array.isArray(array)){
    throw new Error('Non array passed to getIndex()');
  }
  for(var i = 0; i < array.length; i++){
    if (array[i] === value){

      return i;
    }
  }
  return -1;
}

console.log(getIndex(array1, 'd'));
