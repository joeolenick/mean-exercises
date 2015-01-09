// Objective: write a function to compute the first 'n' numbers in the fibonacci sequence

/*
 * The fibonacci sequence is found by summing the current number and previous number in the sequence.
 * For example:	0 + 1 = 1
 *							1 + 1 = 2
 *							1 + 2 = 3
 *							2 + 3 = 5
 *							3 + 5 = 8
 *							5 + 8 = 13
 *							8 + 13 = 21
 *							etc.
 */

function fibonacci(n) {
	// initialize an array with the first two values in the sequence
	// this array will hold all the fibonacci values when we're finished
	var fibonacci_array = [0, 1];
	
	// now we write a loop that will run n-1 times
	// in the first statement (var i = 1) we simple initialize an arbitrary variable 'i'
	// in the next statement (i < n) we say that the loop should only run if the variable 'i' is less than 'n' (the parameter)
		// once 'i' is equal to or greater than 'n', the loop will end
	// in the final statement (i++), we tell the loop to increment i every time the loop runs
	for (var i = 1; i < n; i++) {
		// the new value we add to the array is the current value (at index i) added to the previous value (at index i-1)
		var new_value = fibonacci_array[i-1] + fibonacci_array[i];
		// then add the new value to the end of the array
		// it will become the current value when i is incremented at the end of the loop
		fibonacci_array.push(new_value);
	}
	
	return fibonacci_array;
}


// after defining the function, run it to see the completed array
console.log(fibonacci(10));