/*
6. Define a function reverse() that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj".
*/

// breaking the string apart

var reverse = function(string){
  var finished = '';
  if (!string) throw new Error('REVERSE: null passed to reverse');
  for (var i = string.length - 1; i >= 0; i--){
    finished += string[i];
  }
  return finished;
};

console.log(reverse('Joe Olenick'));
console.log(reverse('Joe Olenick Again'));
