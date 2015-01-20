var array = ['a', 'b', 'c' , 'd', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l','m','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//array.filter //return array of vowles and one of consonants
var arrayVowles = [];

var vowlesInArray = array.filter(function(array){
  return  array  === 'a' ||  array  === 'e' ||  array  === 'i' ||
          array  === 'o' ||  array  === 'u' ||  array  === 'y';

});

console.log(vowlesInArray);

// Not Vowles

var arrayVowles = [];

var consonantsInArray = array.filter(function(array){
  return array  !== 'a' &&  array  !== 'e' &&  array  !== 'i' &&
         array  !== 'o' &&  array  !== 'u' &&  array  !== 'y';

});

console.log(consonantsInArray);
