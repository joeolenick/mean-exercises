/*
9. Write a function filterLongWords() that takes an array of words and an
integer i and returns the array of words that are longer than i.
*/

var array = [ "JoeOlenick",
123,
"Hippopotomonstrosesquippedaliophobia",
"Test",
"pneumonoultramicroscopicsilicovolcanoconiosis",
"Oxyphenbutazone"];

var filterLongWords = function(wordList, int){
  if (!wordList) throw new Error('filterLongWords: Null entry');
  var longest = [];
  for (var i = 0; i < wordList.length; i++) {
    if (wordList[i].length > int) {
      longest.push(wordList[i]);
    }
  }
  return longest;
};
console.log(filterLongWords(array, 10));
