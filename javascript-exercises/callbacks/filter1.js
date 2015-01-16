// array.filter()
function filterArray(array, filterFunction) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if ( filterFunction( array[i] ) === true ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

var array = [1,2,3,4,5,6,7,8,9,10];

var evens = filterArray(array, function(value) {
  return value % 2 === 0;
});

var odds = filterArray(array, function(value) {
  return value % 2 === 1;
});

var greaterThan5 = filterArray(array, function(value) {
  return value > 5;
});

console.log(evens);
console.log(odds);
console.log(greaterThan5);
