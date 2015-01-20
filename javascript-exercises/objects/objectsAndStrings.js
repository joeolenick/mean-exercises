

function Person(firstName, lastName, age, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.dateOfBirth = dateOfBirth;
    }

var bill = new Person("Bill", "Gates", 59, "1955-10-28");
var elon = new Person("Elon", "Musk", 43, "1971-06-28");
var sergey = new Person("Sergey", "Brin", 41, "1973-08-21");
var jeff = new Person("Jeff", "Bezos", 51, "1964-01-12");
var peter = new Person("Peter", "Thiel", 47, "1967-10-11");

console.log(bill);
console.log(elon);
console.log(sergey);
console.log(jeff);
console.log(peter);
