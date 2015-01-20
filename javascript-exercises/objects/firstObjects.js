/* why do we have objects?  Arrays are really awesome.. they cover a lot.. BUT they do not have the ability to solve alot of real world problem.

The key:value relation is really what makes them powerful.

// Module Pattern
var person = {
  eyeColor: "blue",
  firstName: "Joe",
  lastName: "Olenick",
  age: "28",
  id: 123456789,
  fullname: function(){
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.fullName());

//constructor pattern

*/

var mystring = 'this is ok ok ok ok ';

console.log(mystring.replace(/ok/g, "awesome"));
