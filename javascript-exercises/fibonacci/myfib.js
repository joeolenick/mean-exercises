var array = [0,1];
var MAX = 100;

for(var i = array.length - 1; array.length < MAX; i++){
var newValue = array[i] + array[i -1];
array.push(newValue);
}

console.log(array);
