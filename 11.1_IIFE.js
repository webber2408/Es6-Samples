/*
    Note: The easiest way to distinguish declaration vs. expression is the position of the word function
    in the statement (not just a line, but a distinct statement). If function is the very first thing in
    the statement, then it’s a function declaration. Otherwise, it’s a function expression.
*/

// Here function identifier `foo` doesn't get bind to global scope!
// First () makes the function a statement, and second () executes the function!
(function foo(){
    console.log("Hello");
})();
// Hello

(function(){
    console.log("Hello");
}());
// Hello

var name = (function(){
    return "John Doe";
})();
console.log(name); // John Doe

//Important
;(function(){
    return 42;
})();
/*
This prevents issues when blindly concatenating two JavaScript files. 
Since JavaScript does not require semicolons, you might concatenate 
with a file with some statements in its last line that causes a syntax error.
*/

//Passing arguments
(function(name){
    console.log(name);
})("Rahul");
// Rahul

// Universal Module Definition (UMD)
var a = 2;
(function IIFE( def ){
    def( window );
})(function def( global ){
    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2
});