function getMultiplesOf5(maxVal) {
  var values = [];
  if (maxVal === undefined) throw new Error('No value passed as maxVal at function getMultiplesOf5');
  for (var i = 1; i <= maxVal; i++) {
    if (i % 5 === 0) values.push(i);
  }
  return values;
}

console.log(getMultiplesOf5(10));
console.log(getMultiplesOf5(30));
