/* More on Closures */

//Example 1
var test;
function fun() {
  let num = 1; // Closure variable
  test = function () {
    num++;
    console.log(num);
  };
  num++;
  return test;
}

fun();
test(); // 3
test(); // 4 // closure variables are kept by reference
fun(); // closure variable num is reset to 2
test(); // 3

// Example 2
var arr = [];
(function () {
  for (var i = 0; i < 4; i++) {
    arr[i] = function (x) {
      return x + i;
    };
  }
})();

console.log(arr[0](10)); //14
console.log(arr[1](10)); //14
console.log(arr[2](10)); //14
console.log(arr[3](10)); //14

/*
    In this case, when the functions are created,
    they have the reference to variable `i`
    but when we call them, they use the updated value
    of `i` which is 4 here.
*/
