
/*
4. Write a function translate() that will translate a text into "rövarspråket".
That is, double every consonant and place an occurrence of "o" in between.
For example, translate("this is fun") should return the string "tothohisos isos
fofunon"
*/

var isVowel = function(char) {
  if (!char || char.length > 1) throw new Error('Input ' + char + ' is invalid at isVowel()');
  return !!~['a', 'e', 'i', 'o', 'u', 'y'].indexOf(char.toLowerCase());
};

// 'This is fun'
var translate = function(word) {
  if (!word) throw new Error('TRANSLATE(): Null passed to function translate');
  var rovarspraketString = '';
  for (var i = 0; i < word.length; i++) {
    if (!isVowel(word[i]) && word[i] !== ' ') {
      rovarspraketString += word[i] + 'o' + word[i];
    } else {
      rovarspraketString += word[i];
    }
  }
  return rovarspraketString;
};

console.log(translate('this is fun'));
