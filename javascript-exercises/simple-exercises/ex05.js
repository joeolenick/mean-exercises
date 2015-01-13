/*
5. Define a function sum() and a function multiply() that sums and multiplies
(respectively) all the numbers in an array of numbers. For example,
sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/

var numbers = [1,2,3,4];

var sum = function(array){
  var total = 0;
  for(var i=0; i< array.length; i++){
    total += array[i];
  }
  return total;
};

var multiply = function(array){
  var total = 1;
  for(var i=0; i< array.length; i++){
    total *= array[i];
  }
  return total;
};

console.log(sum(numbers));
console.log(multiply(numbers));
