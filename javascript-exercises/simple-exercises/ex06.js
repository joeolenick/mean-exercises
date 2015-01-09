/*
6. Define a function reverse() that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj".
*/

// breaking the string apart
var reversed = [];
var finished = "";

   var reverse = function(string){
   for (i = string.length; i > 0; i--){
     reversed.push(string.charAt(i-1));
   }

// putting it back together.
  for (i = 0; i < reversed.length; i++){
    finished += reversed[i];
}
return finished;
};
