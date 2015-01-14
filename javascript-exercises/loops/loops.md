## Loops in Javascript

Loops are used to execute the same piece of code multiple times in a row.

There are two main types of loops: the `while` loop, and the `for` loop

#### While Loops

A while loop looks like this:
```
while (// condition for executing the loop) {
  // loop code here
}
```

The loop starts by checking the condition statement in the parentheses. If the condition is falsey, the loop will break, and the program will continue executing after the last curly brace. If it is truthy, the loop will run once, then it will check the condition again. As long as the condition is true, the loop will run.

This loop will run forever:
```
while (true) {
  // loop code here
}
```

Let's write a loop to print out a string 5 times:
```
var count = 0;

while (count < 5) {
  console.log("hello");
  
  count++;
}
```

(Play around with this one to figure out how it works a little better.)

#### For Loops

A for loop is just a specialized `while` loop. For loops are designed to run a set number of times. (What we did in the last example would be better executed using a for loop.)

This is what a for loop looks like:
```
for (// variable initialization; // condition for executing loop; // variable increment) {
  // loop code here
}
```

Now here is the last while loop example (print a string 5 times) written as a for loop:
```
for (var count = 0; count < 5; count++) {
  console.log('hello');
}
```

This is the standard form for `for` loops:
```
for (var i = 0; i < some_value; i++) {
  // loop code here
}
```

#### Loop Keywords

There are a couple keywords that can be used in both `for` and `while` loops.

The `break` keyword exits the loop immediately. This is useful if you run into a situation where you don't need to complete the loop, and just want to break out of it right away. For example, if you are searching for a specific value in an array, when you find it you don't need to stay in the loop, so you break out:
```
var array = ["Tommy", "Richard", "Beverly", "Big Tom", "Zalinsky"];
var value = "Richard";
var value_found = false;

for (var i = 0; i < array.length; i++) {
  if (array[i] === value) {
    value_found = true
    break;
  }
}

if (value_found) {
  console.log(value + " is in the array!");
}
```

The `continue` keyword breaks the current iteration of the loop. For example, if you want to print out all the elements of an array except the third, you could do this:
```
var array = ["Rod Kimble", "Trailer Guy", "Frank Powell", "Cathy", "Denise", "Dave"];

for (var i = 0; i < array.length; i++) {
  if (i == 2) {
    continue;
  }
  console.log(array[i]);
}
```


#### Additional Resources

To learn more about loops, or if you just need a quick reference:
- [W3 Schools -- For Loops](http://www.w3schools.com/js/js_loop_for.asp)
- [W3 Schools -- While Loops](http://www.w3schools.com/js/js_loop_while.asp)
- [W3 Schools -- Break and Continue](http://www.w3schools.com/js/js_break.asp)

#### Practice exercise

Try to write a function that will sort an array like this one `[1, 5, 9, 12, 4, 2, 8]`
You may have to search google for some simple sorting algorithms.

(The solution is in the sorting-solution.js file)
