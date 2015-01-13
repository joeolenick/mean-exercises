/*
10. Write a function charFreq() that takes a string and builds a frequency
listing of the characters contained in it. Represent the frequency listing
as a Javascript object. Try it with something like
charFreq("abbabcbdbabdbdbabababcbcbab").
*/


var charFreq = function(string){
  if (!string) throw new Error('charFreq: Null entry');
    var charIterations = {};
    for (var i = 0; i < string.length; i++){
      if(string[i] in charIterations){
          charIterations[string[i]] += 1;
        }else{
          charIterations[string[i]] = 1;
      }
      //console.log(charIterations); //Used for testing, fun to watch as well.
    }
    return charIterations;
};

console.log(charFreq("abbabcbdbabdbdbabababcbcbababbabcbdbabdbdbabababcbcbab"));
