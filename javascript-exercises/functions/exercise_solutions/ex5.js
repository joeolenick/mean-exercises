function isLeapYear(year) {
  if (year === undefined) throw new Error('Year not passed to function isLeapYear');
  if (year % 4 !== 0) return false;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return true;
}

console.log('The year 1980 is a leap year:', isLeapYear(1980));
console.log('The year 1900 is a leap year:', isLeapYear(1900));
console.log('The year 2000 is a leap year:', isLeapYear(2000));
