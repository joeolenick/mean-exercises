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
