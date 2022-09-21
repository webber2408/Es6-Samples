// "use strict"; => then error;

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
};

var bar = obj.foo; // reference/alias

globalThis.a = "oops, global";

bar(); // oops, global
