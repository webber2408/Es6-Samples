// var - local vs global scope

(function fun() {
  var a = (b = 214),
    c = 0;
  c = a + b;
  console.log(c); // 428
})();

console.log(b); // 214
// console.log(a); // Reference error, a is not defined!
// console.log(c); // Reference error, c is not defined!

/* 
Here in this scenario, 
    (a = b = 214) can be seen as (b = 214) & (var a = b)
Since `b` is not defined here in the function scope, `b` becomes
the global variable.
Both `a` & `c` are defined locally to the function hence we can't
access them outside the function's scope.
*/
