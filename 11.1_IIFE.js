(function(){
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