/*
3. Write a function that takes a character
(i.e. a string of length 1) and returns true
if it is a vowel, false otherwise.
*/

var identifyVowel = function(char){
  if(char.length > 1){
    return "Not a valid input, character limit of 1";
  }else if(char.toLowerCase() === 'a' | 'e' | 'i' | 'o'| 'u' | 'y'){
    return true;
  }else{
    return false;
  }
};

console.log(identifyVowel("ABV")); //returns error
console.log(identifyVowel("a")); //returns true
console.log(identifyVowel("A")); //returns true
console.log(identifyVowel("d")); //returns false
