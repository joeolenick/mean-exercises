// array.indexOf()
// array.filter();
var array = [0, 10, 12, 150, 165, 175];

// function getLessThanValue(array, value) {
//   var newArray = [];
//   // Error checking
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < value) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

var lessThan100 = array.filter(function(value) {
  return value < 100;
});

// console.log(getLessThanValue(array, 100));
console.log(lessThan100);
