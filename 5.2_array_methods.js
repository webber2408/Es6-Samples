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
