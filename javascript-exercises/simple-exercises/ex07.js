/*
7. Represent a small bilingual lexicon as a Javascript object in the
following fashion {"merry":"god", "christmas":"jul", "and":"och",
"happy":gott", "new":"nytt", "year":"år"} and use it to translate your
Christmas cards from English into Swedish.
*/


var swedishCard = '';
var translations = {
  merry:    "god",
  christmas:"jul",
  and:      "och",
  happy:    "gott",
  new:      "nytt",
  year:     "år"
};
var englishCard = "merry christmas and happy new year";
var splitting = englishCard.split(" ");






//console.log(splitting);
