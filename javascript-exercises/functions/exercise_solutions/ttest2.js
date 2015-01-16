var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var filterVowel = array.filter(function(value) {
  var vowels = 'aeiou';
  var n = vowels.indexOf(value);
  return n === -1;
});

console.log(filterVowel);
