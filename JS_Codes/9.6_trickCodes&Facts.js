//Facts

/*
JavaScript is an interpreted language, not a compiled language.
A program such as C++ or Java needs to be compiled before it is run. ...
Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.
*/



//Trick Questions

//Example 1
function fun(){
  x++;  // x = x+1; (Reference error: x is not defined)
  this.x = x;
  return fun;
}
// let bun = new new fun;
// console.log(bun); //[Function: fun]
// console.log(bun.x); // (Reference error: x is not defined)


//Example 2
console.log("1" - - "1"); // 2
/*
  the second minus (-) operator is a unary operator that casts the string "1" to a number (-1);
  and the first minus (-) opertator is the substraction opertator
  Hence, the output becomes:
  1 - (-1) = 2
*/


//Example 3
console.log("1" - + 1); // 0
console.log("1" - - 1) // 2
// console.log("1"--1); //ReferenceError: Invalid left-hand side expression in postfix operation
// console.log("1"++"1"); //ReferenceError: Invalid left-hand side expression in postfix operation


//Eample 4
// Also to note, JavaScript can calculate Strings if they are numbers like, console.log("1" - "5") // -4  --- > NOT ALWAYS
console.log("1" + 5); //15
console.log("1" + "5"); //15
console.log("1" - "5"); //-4 As it gets converted into 1 - 5


//Example 5
console.log(2 == [2]); //true
console.log(2 == "2"); //true
// console.log(2 == {2}); //SyntaxError: Unexpected token }
/*
  The first console.log() statement returns true because it is read as:
    2 === Number([2].valueOf().toString())
    .valueOf() in an array simply returns the array itself
    and .toString for a single array element returns the single array string
    so it becomes,
    2 === Number("2")
    then,
    2 === 2
    which is true!!
*/
console.log([[[[2]]]].valueOf()); // [ [ [ [Array] ] ] ]
console.log([[[[2]]]].toString()); //"2"
console.log([1, 2, ]); // [1, 2]
console.log([1, 2, ].toString()); // "1,2"
console.log([1, 2, ].valueOf()); // [1, 2]

let a = ["a", "b", "c"];
console.log(a[2]); // c
// Even this is treated as a[2.toString()], which is a["2"] and then the array magic happens (Proof below!)
console.log(a[[2]]); // c
// The above is treated as a[[2].toString()] which is nothing but a["2"];
























//
