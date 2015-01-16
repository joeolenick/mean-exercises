function filterArray(array, cb) {
  if (typeof cb !== 'function') return array;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
