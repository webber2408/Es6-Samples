//-------------------------Manipulation-------------------------------------
// fill(toFillWith, startIndex, till endIndex)
console.log([1, 2, 3].fill(4));
console.log([1, 2, 3].fill(5, 1));
console.log([1, 2, 3].fill(5, 1, 2));
/*
[ 4, 4, 4 ]
[ 1, 5, 5 ]
[ 1, 5, 3 ]
*/

/* array.from() */
// Lets us create an array from Object, Set, Map, Another array, String.
//Example 1
console.log(Array.from('foo')); //[ 'f', 'o', 'o' ]
console.log(Array.from(123)); //[]
console.log(Array.from(['123'])); //['123']
//Example 2
const map = new Map([["Name", "John"], ["Age", "24"]]);
console.log(Array.from(map)); //[ [ 'Name', 'John' ], [ 'Age', '24' ] ]
//or
console.log([...map]); //[ [ 'Name', 'John' ], [ 'Age', '24' ] ]
console.log(Array.from(map.values())); //[ 'John', '24' ]
console.log(Array.from(map.keys())); //[ 'Name', 'Age' ]
//Example 3
// Possible array manipulation using the optional map function
console.log(Array.from([1, 2, 3], (x) => x**2 )); //[ 1, 4, 9 ]

// concat()
let concat_arr = [1,2,3].concat([4,5,6], [7,8,9,10]);
console.log(concat_arr);

// copyWithin()
console.log(["Hey", "There", "You"].copyWithin(1, 2));

// map()




//-----------------------Convert to String Based-----------------------------------------
// join() -> returns the array as a string
console.log([1, 2, 3].join()); //1,2,3 (Default Operator -> (,))
console.log([1, 2, 3].join("-")); //1-2-3

// toString() -> returns the array as a comma separated strings
console.log(["true", "false"].toString()); //true,false




//---------------------Add New Items Based-------------------------------------------
// push() -> Adds to the end | Changes array length
var arr = [1, 2, 3]
arr.push(4);
console.log(arr);

//splice(startIndex, 0, ele1, ele2) -> Adds to any specific position but will remove also by default (so added 0 to remove no elements) | Changes array length

//unshift() -> Adds to the start of array | Changes array length
var arr = [1, 2, 3];
arr.unshift(-1, 0);
console.log(arr); //[ -1, 0, 1, 2, 3 ]




//--------------------Array Item Removal Based------------------------------------------
// pop() (Remove last element from the array) -> Changes the original array
var arr = [1,2,3,4];
console.log(arr.pop()); //4
console.log(arr); //[1, 2, 3]

// shift() (Remove first element from the array) -> Changes the original array
var arr = [1, 2, 3, 4];
console.log(arr.shift()); //1
console.log(arr); //[2, 3, 4]

// splice(startIndex, removeHowMany, toAddElement1, toAddElement2) -> Changes the original array
var arr = ["hey", "there", "hello", "how", "are", "you?"];
console.log(arr.splice(2, 1));
console.log(arr);

// slice(startPos, till endPos) -> Doesn't change the original array
var arr = ["hey", "there", "hello", "how", "are", "you?"];
console.log(arr.slice(2, 4));
console.log(arr);




//--------------------Search/TestCase Based------------------------------------------
// every() -> checks if all the funcitons pass the test or not
var result = [2, 4, 6].every((item) => {
  return item%2==0;
});
console.log(result); //true

// some()  -> checks and returns true if any of the element passes the test, and doesn't check the remaining array
var result = [2, 4, 9].some(item => { return item%3 == 0; });
console.log(result); //true


// find() / findIndex() -> returns value / index of first element that passes a test, doesn;t check the remaining array
console.log([1, 5, 2].find((item, index, arr) => {
  return item%2==0;
}));

// includes() --> Covered in 4
// indexOf() / lastIndexOf() --> Covered in 4

// isArray() -> Static Method
console.log(Array.isArray([1, 2, 3]));

// filter()





//-----------------------Display Based---------------------------------------
// entries()
for(let x of [1, 2, 3].entries()){
  console.log(x);
}

// keys()
for(let x of [1, 2, 3].keys()){
  console.log(x);
}// 0 1 2

// reverse()
console.log([1, 2, 3].reverse()); // [3, 2, 1]

// sort()
var arr = [9, 8, 7];
arr.sort();
console.log(arr);// [7, 8, 9]

// reduce() -> reduces the array into single element and moves from left to right. -> Doesn't change the array
// reduceRight() -> reduce from right to left.
var arr = [1, 2, 3, 4, 5];
let sum = arr.reduceRight((total, arrayItem) => {
  return total + arrayItem;
})
console.log(sum); //15
console.log(arr); // [1, 2, 3, 4, 5]

// valueOf()
var arr = [5, 6, 7, 8];
console.log(arr.valueOf()); //[ 5, 6, 7, 8 ]
