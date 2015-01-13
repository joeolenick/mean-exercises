//////////////////////////////////////////
// Exercise 1
//////////////////////////////////////////

var max = function(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    // they are equal, so return one of them
    return x;
  }
};

//////////////////////////////////////////
// Exercise 2
//////////////////////////////////////////

var maxOfThree = function(x, y, z) {
  if ((x > y) && (x > z)) {
    return x;
  } else if ((y > x) && (y > z)) {
    return y;
  } else if ((z > x) && (z > y)) {
    return z;
  } else {
    // they are equal, so return one of them
    return x;
  }
};

//////////////////////////////////////////
// Exercise 3
//////////////////////////////////////////

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

//////////////////////////////////////////
// Exercise 4
//////////////////////////////////////////

var translate = function(text) {
  // we can check if it's NOT in 'vowels'
  // to see if it is a consonant
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  // the index:  0    1    2    3    4

  // create a placeholding variable
  var translatedText = '';

  // this for-loop will help us iterate through the 
  // 'text' variable, one-by-one. In JavaScript, you
  // can treat a string kind of like an array.
  // (Notice that I'm using text.length and text[i]
  // like I would an array)
  for (var i=0; i<text.length; i++) {
    // Think of this array iterating through each letter
    // like so: "Parker"
    //              ^
    //           012345
    // where the caret (^) is at the index i, and is
    // stored in the current 'letter' variable.
    var letter = text[i];

    // Now that we have a letter, lets check if it's
    // a consonant!
    if (vowels.indexOf(letter) === -1) {
      // it's a consonant. Hooray!
      translatedText += letter + 'o' + letter;
    } else {
      // just pass the letter straight through;
      translatedText += letter;
    }
  }

  return translatedText;
};

//////////////////////////////////////////
// Exercise 5
//////////////////////////////////////////

var sum = function(operands) {
  var total = 0;

  for (var i=0; i<operands.length; i++) {
    var operand = operands[i]; // get the current operand
    total += operand;
  }

  return total;
};

var multiply = function(operands) {
  var total = 1;

  for (var i=0; i<operands.length; i++) {
    var operand = operands[i]; // get the current operand
    total *= operand;
  }

  return total;
};

//////////////////////////////////////////
// Exercise 6
//////////////////////////////////////////

var reverse = function(str) {
  var reversedStr = '';

  // length - 1 to account for 0-based indexing
  for (var i=(str.length-1); i>=0; i--) {
    var letter = str[i];

    reversedStr += letter;
  }

  return reversedStr;
};

//////////////////////////////////////////
// Exercise 7
//////////////////////////////////////////

var translateCard = function(text, dict) {
  // create a placeholder to hold the final product
  var translatedText = '';

  // Split the text at every space and put in an array
  var textArray = text.split(' ');

  // now iterate through each word and compare in the dictionary
  for (var i=0; i<textArray.length; i++) {
    var word = textArray[i];

    // make sure that this word is even in the dictionary
    if (dict.hasOwnProperty(word.toLowerCase())) {
      // it does, so translate it!
      translatedText += dict[word.toLowerCase()] + ' ';
    } else {
      // just pass through ???'s
      translatedText += '??? ';
    }
  }

  return translatedText;
};

var englishToSwedish = {
  'merry': 'god',
  'christmas': 'jul',
  'and': 'och',
  'happy': 'gott',
  'new': 'nytt',
  'year': 'år'
};

console.log(translateCard("Merry Christmas and Happy New Year !", englishToSwedish));

//////////////////////
// Exercise 8
//////////////////////

function longest_word(word_list) {
	// this variable will eventually hold the length of the longest word in the array
  var longest = 0;
  
  for (var i = 0; i < word_list.length; i++) {
    var current_word_length = word_list[i].length;
    if (current_word_length > longest) {
      longest = current_word_length;
    }
  }
  
  return longest;
}


var words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
console.log(longest_word(words));



//////////////////////
// Exercise 9
//////////////////////

function filter_long_words(word_list, minimum_length) {
  for (var i = 0; i < word_list.length; i++) {
    var current_word_length = word_list[i].length;
    
    if (current_word_length < minimum_length) {
      word_list.splice(i, 1);
      i--;
    }
  }
  
  return word_list;
}

var words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

console.log(filter_long_words(words, 1));



//////////////////////
// Exercise 10
//////////////////////

function character_frequency(word) {
  var frequency_map = {};
  
  for (var i = 0; i < word.length; i++) {
    if (frequency_map[word[i]]) {
      frequency_map[word[i]]++;
    } else {
      frequency_map[word[i]] = 1;
    }
  }
    
  return frequency_map;
}

console.log(character_frequency('aaoeaoeaoaeoe'));