//array.indexOf();
//array.filter();

var array = [0,10,12,150,165,175];

function getLessThanValue(array, value){
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] < value){
      new array.push(array[i]);
    }
  }
  return newArray
}



var lessThan100 = array.filter(function(value){
  return value < 100
});
