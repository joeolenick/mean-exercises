var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getIndex(array, value) {
  if (!Array.isArray(array) || value === undefined) {
    return -1;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(getIndex(array, 7));
