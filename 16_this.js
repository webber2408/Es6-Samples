/*
If a function has a `this` reference inside it, that `this` reference usu‐
ally points to an object. But which object it points to depends on
HOW THE FUNCTION WAS CALLED.
It’s important to realize that this does not refer to the function itself,
as is the most common misconception.
*/

function fun() {
  console.log(this.name);
}

var name = "Rahul Sharma";
var obj1 = {
  // does not create its own scope
  name: "Kevin",
  fun: fun,
};
var obj2 = {
  name: "John",
};

fun();
obj1.fun();
fun.call(obj2);
// new fun(); // sets this to a brand new empty object.
/*
undefined
Kevin
John
undefined
*/

// MDN
/*
`this` is determined by how a function is called (runtime binding). It may be different
each time the function is called.
`this` in non-strict mode is always a reference to an object!!!!
`this` in strict mode can be any value.
Access global this using  `globalThis`.

`this` in functions
--------------------------------------------------------------------------------------------
Arrow functions don't provide their own this binding, it retains the `this` value of the
enclosing lexical context.
Whereas when Normal function declarations are concerned, `this` depends on how they are called!


*/

console.log(
  "--------Example 1 (Arrow Functions & Function Declarations)----------"
);
var obj = {
  // obj doesnot form any enclosing scope
  age: 24,
  incAge1: () => {
    // since this resolves to the global scope! as the object doesn't create an enclosing scope!
    this.age++;
  },
  incAge2: function () {
    // depends on how it is called
    this.age++;
  },
};
obj.incAge1(); // nothing happens
obj.incAge2(); // 24+1 = 25
console.log(obj.age); // 25

// Great Example, (If you know this, you have done really great!)
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};
// Call bar as a method of obj, setting its this to obj
// Assign a reference to the returned function to fn
var fn = obj.bar();
console.log(fn() === obj); // true
// But caution if you reference the method of obj without calling it
var fn2 = obj.bar;
// Calling the arrow function's this from inside the bar method()
// will now return window, because it follows the this from fn2.
console.log(fn2()() == globalThis); // true

console.log("--------Example 2 (Functions in Non-Strict Mode)----------");
function f1() {
  return this; // resolves to the global object
}
// In a browser:
// console.log(f1() === window); // true
// In Node:
console.log(f1() === globalThis); // true

console.log("--------Example 3 (Functions in Strict Mode)----------");
function f2() {
  "use strict";
  return this; // in the strict mode, the value of `this` is not set. Hence, it points to undefined.
}
console.log(f2() == undefined); // true

console.log(
  "--------Example 3.1 (Binding function's this based on how they are called!)----------"
);
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: "Custom" };
// We declare a variable and the variable is assigned to the global window as its property.
a = "Global";
function whatsThis() {
  return this.a; // The value of this is dependent on how the function is called
}
console.log(whatsThis()); // 'Global' as this in the function isn't set, so it defaults to the global/window object
console.log(whatsThis.call(obj)); // 'Custom' as this in the function is set to obj
console.log(whatsThis.apply(obj)); // 'Custom' as this in the function is set to obj

console.log("--------Example 4 (Objects, Call & Apply)----------");
function add(c, d) {
  return this.a + this.b + c + d;
}
var o = { a: 1, b: 3 };
console.log(add.call(o, 5, 7)); // 16 (if function statement, then NaN)
console.log(add.apply(o, [10, 20])); // 34 (if function statement, then NaN)

console.log("--------Example 4 (Objects, Call & Apply)----------");
function f() {
  return this.a;
}
var g = f.bind({ a: "azerty" });
console.log(g()); // azerty
var h = g.bind({ a: "yoo" }); // bind only works once!
console.log(h()); // azerty
var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

console.log("--------Example 6 (Class)----------");
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this); // imp
    console.log(Object.getOwnPropertyNames(proto)); // imp
  }
  first() {}
  second() {}
  static third() {}
}
new Example(); // ['constructor', 'first', 'second']
//  in classes, static methods are not properties of `this` instead they are the properties of the class itself.
// Unlike base class constructors, derived constructors have no initial `this` binding.
// Calling  super() creates a `this` binding within the constructor

console.log("--------Example 7 (Class Inheritance)----------");
/*
Derived classes must not return before calling super(), unless they return an Object or have no constructor at all.
*/
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {}
}
class VeryGood extends Base {
  constructor() {
    super();
  }
}

new Good(); // Works great!
new AlsoGood(); // Works great!
// new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
new VeryGood(); // Works great!
