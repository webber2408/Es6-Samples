//Map -> Object
const map = new Map([ ['age', 50], ['name', 'John'] ]);
console.log(map);
const obj = Object.fromEntries(map);
console.log(obj);
//Array -> Object
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
console.log(arr);
const obj1 = Object.fromEntries(arr);
console.log(obj1); // { 0: "a", 1: "b", 2: "c" }