function numberOfOccurances(array, value) {
  if (!Array.isArray(array)) throw new Error('Non Array Passed to numberOfOccurances');
  return array.filter(function(val) {
    return val === value;
  }).count;
}
