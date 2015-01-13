/*
3. Write a function that takes a character
(i.e. a string of length 1) and returns true
if it is a vowel, false otherwise.
*/

var identifyVowel = function(char){
  if(!char || char.length > 1)
    throw new Error("Input not invalid.")
  else if(char.toLowerCase() === 'a' ||
    char.toLowerCase() === 'e' ||
    char.toLowerCase() === 'i'  ||
    char.toLowerCase() === 'o'  ||
    char.toLowerCase() === 'u'  ||
    char.toLowerCase() === 'y'
  ){
    return true;
  }else{
    return false;
  }
};

console.log(identifyVowel("a")); //returns true
console.log(identifyVowel("E")); //returns true
console.log(identifyVowel("d")); //returns false


/*
How someone else did it with an array instead of Or Operators.
var isVowel = function(char) {
// y doesn't count :D
var vowels = ['a', 'e', 'i', 'o', 'u'];
// the index:  0    1    2    3    4

// Because 'vowels' is an array, it has a
// method called 'indexOf'. You can pass
// indexOf an element and it will tell you
// at which index that element is at inside of
// the array. If not there, it returns -1.

if (vowels.indexOf(char) > -1) {
return true;
}
};
*/
