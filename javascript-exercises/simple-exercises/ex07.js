/*
7. Represent a small bilingual lexicon as a Javascript object in the
following fashion {"merry":"god", "christmas":"jul", "and":"och",
"happy":gott", "new":"nytt", "year":"år"} and use it to translate your
Christmas cards from English into Swedish.
*/

// Translation "Dictionary"
var translationDef = {
  merry:    "god",
  christmas:"jul",
  and:      "och",
  happy:    "gott",
  new:      "nytt",
  year:     "år",
  that:     "det",
  was:      "var",
  kinda:    "typ av",
  rough:    "grov"
};
//Creating function to translate from English to Swedish
var eng2swed = function(babelFish){
//Error check to ensure input is not Null
  if (!babelFish) throw new Error('ENG2SWED: Null entry');
//Variable before loop for scope. Holder of final product.
  var swedishCard = '';
//Splitting string input into array so the words remain whole.
  var babelFishArray = babelFish.split(" ");
//loops through array. Array value = object property, brings back value.
    for (var i = 0; i < babelFishArray.length; i++){
    swedishCard += ( translationDef[babelFishArray[i]] ) + " ";
  }
    return swedishCard;
};

console.log(eng2swed("merry christmas and happy new year"));
console.log(eng2swed("that was kinda rough"));
