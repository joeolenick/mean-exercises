//array.filter()

//Function that takes an array of values

var array = [1,2,3,4,5,6,7,8,9];

function mathFunction(array, operation){
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    newArray.push(operation(array[i]));
  }
  return newArray;
}

var add = mathFunction(array,function addTwo(value){
  return value + 2;
});

console.log(add);
