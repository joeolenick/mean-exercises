function filterArray(array, filterFunction) {
  var newArray = [];
  for (var i=0; i < array.length; i++) {
    newArray.push(filterFunction(array[i]));
  }
  return newArray;
}

var array2 = [1,2,3,4,5];

var sum = filterArray(array2, function(value) {
  return value + 5;
});

var negative = filterArray(array2, function(value) {
  return value * -1;
});

console.log(sum);
console.log(negative);
