function fun() {
  name = "Kevin";
  console.log(name);
}
fun(); //Kevin

function fun1() {
  "use strict";
  name1 = "John";
  console.log(name1);
}
fun1(); //ReferenceError: name1 is not defined
