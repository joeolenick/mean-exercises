/*
8. Write a function findLongestWord() that takes an array of words and returns
the length of the longest one.
*/

var array = [ "JoeOlenick",
              "Hippopotomonstrosesquippedaliophobia",
              "Test",
              "pneumonoultramicroscopicsilicovolcanoconiosis",
              "Oxyphenbutazone"];
var findLongestWord = function(wordList){
  if (!wordList) throw new Error('findLongestWord: Null entry');
  var longest = 0;
  for (var i = 0; i < wordList.length; i++) {
    if (wordList[i].length > longest) {
      longest = wordList[i].length;
    }
  }
  return longest;
};
console.log(findLongestWord(array));
