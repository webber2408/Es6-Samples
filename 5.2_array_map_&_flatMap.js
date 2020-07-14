/* Map & FlatMap */

/*
Map calls a provided callback function once for each element in an array, in order, 
and constructs a new array from the results.
Callback is invoked only for indexes of the array which have assigned values (including undefined).
*/

let arr_string = ["it's Sunny in", "", "California"];

// Example 1 (Modifying array with Map)
const arr1 = arr_string.map((item) => {
    return item + " | Map";
});
console.log(arr1);
//[ "it's Sunny in | Map", ' | Map', 'California | Map' ]


//Example 2 (Modifying the array in place)
arr_string.map((item, index, arr) => {
    arr[index] += " | Map";
});
console.log(arr_string);
//[ "it's Sunny in | Map", ' | Map', 'California | Map' ]
// Note: You shouldn't use map if you're not usint the array it returns or
//       if you are not returning from the callback!


arr_string = ["Nice to see", "you", "John"];

//Example 3 (Flatting the array)

console.log(arr_string.map(x => x.split(" ")));
console.log(arr_string.flatMap(x => x.split(" ")));
/*
[ [ 'Nice', 'to', 'see' ], [ 'you' ], [ 'John' ] ]
[ 'Nice', 'to', 'see', 'you', 'John' ]
*/

//Example 4 (String to Int)

arr_string = ["1", "2", "3"];

let num_array = arr_string.map(item => parseInt(item));
console.log(num_array);

let num_array1 = arr_string.map(Number);
console.log(num_array1);
/*
[ 1, 2, 3 ]
[ 1, 2, 3 ]
*/