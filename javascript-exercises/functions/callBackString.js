var isVowel = function(char) {
  return !!~['a', 'e', 'i', 'o', 'u', 'y'].indexOf(char.toLowerCase());
};

// 'This is fun'
var translate = function(callBack) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    if (!isVowel(word[i]) && word[i] !== ' ') {
    output += (callBack);
    }
  }
return output;
};



var rovarspraket = translate(string,function(value){
  newString = '';
      newString += string[i] + 'o' + string[i];
    } else {
      newString += string[i];
    }

  });


console.log(rovarspraket("hello"));
