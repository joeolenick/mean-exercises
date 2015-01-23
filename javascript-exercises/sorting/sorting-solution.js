/*
 * in this solution we will use insertion sort
 * it's not the fastest sorting algorithm, but it is easy to implement and understand
 * for more sorting algorithms (and some great visuals) go to: http://www.sorting-algorithms.com/
 */
 
/*
 our strategy:
 to sort these numbers in order of least to greatest, we are going to iterate item by item in the list,
 and check if it is smaller than all the numbers after it
 for example:
 
 array: [3, 5, 9, 12, 4, 2, 8]
 index: 0
 3 < 5 => true
 3 < 9 => true
 3 < 12 => true
 3 < 4 => true
 3 < 2 => false (swap 3 and 2) now the array looks like this [2, 5, 9, 12, 4, 3, 8]
 2 < 8 => true
 
 array: [2, 5, 9, 12, 4, 3, 8]
 index: 1
 5 < 9 => true
 5 < 12 => true
 5 < 4 => false (swap 5 and 4) now the array looks like this [2, 4, 9, 12, 5, 3, 8]
 4 < 3 => false (swap 4 and 3) now the array looks like this [2, 3, 9, 12, 5, 4, 8]
 3 < 8 => true
 
 etc.
 
 result [2, 3, 4, 5, 8, 9, 12]
 */
 
 function sort_array(unsorted_array) {
 	// iterate over the array
 	for (var i = 0; i < unsorted_array.length; i++) {
 		// for each item in the array, iterate over only the items after it
 		// don't forget to use a variable different from 'i'
 		for (var j = i + 1; j < unsorted_array.length; j++) {
 			// if the item at position 'j' is less than the item at 'i', swap items 'i' and 'j'
 			if (unsorted_array[j] < unsorted_array[i]) {
 				var tmp = unsorted_array[i];
 				unsorted_array[i] = unsorted_array[j];
 				unsorted_array[j] = tmp;
 			}
 		}
 	}
 	
 	// array is now sorted
 	var sorted_array = unsorted_array;
 	return sorted_array;
 }
 
 
 var numeric_list = [3, 5, 9, 12, 4, 2, 8];
 console.log(sort_array(numeric_list));