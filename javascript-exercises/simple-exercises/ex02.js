/*
2. Define a function maxOfThree() that takes three numbers as
arguments and returns the largest of them.
*/

var maxOfThree = function(num1, num2, num3){
  return Math.max(num1, num2, num3);
};

console.log(maxOfThree(1,2,3));


/*
How someone else did it. (Parker Lusk)

var maxOfThree = function(x, y, z) {
if ((x > y) && (x > z)) {
return x;
} else if ((y > x) && (y > z)) {
return y;
} else if ((z > x) && (z > y)) {
return z;
} else {
// they are equal, so return one of them
return x;
}
};

How Someone else did it (John)

var maxOfThree =function(){
return Math.max.apply(null, arguments);
};

maxOfThree(1,2,3);
*/
