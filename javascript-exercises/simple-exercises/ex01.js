/*
Define a function max() that takes two numbers as arguments
and returns the largest of them.
Use the if-then-else construct available in Javascript.
*/

var max = function(num1, num2){
   if(num1 === num2){
      return num1;
   }else if(num1 > num2){
      return num1;
   }else{
      return num2;
   }
};
//Will result in 8
console.log(max(5,8));
