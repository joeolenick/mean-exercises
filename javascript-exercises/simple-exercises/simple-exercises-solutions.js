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