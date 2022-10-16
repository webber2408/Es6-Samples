/*
The prototype is an object that is associated with every functions and objects by default in JavaScript,
where function's prototype property is accessible and modifiable and object's prototype property
(aka attribute) is not visible. Every function includes prototype object by default.
*/

// Example 1
let foo = {
  name: "Kevin",
};
let bar = Object.create(foo);
bar.age = 24;
console.log(bar.age); // 24
console.log(bar.name); // Kevin (Delegated to foo)
/*
    Here, bar has a prototypical link to foo.
    If the `name` property is not found on the `bar` object,
    JS always fallsback to its prototype - `foo` where the property is found!
*/
// What is "behavior delegation?"

// Example 2
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5

/*
Before going through your code I want to make sure some concept of prototype that are required to understand your code behavior.

[[prototype]] is a hidden property of a JavaScript object.This hidden property is nothing but a link to Object.prototype(If created by object literals).There is no standard way to access this [[prototype]] property.
Functions in JavaScript are objects so they also have [[prototype]] property.Here, In case of function this hidden property is a link to Function.prototype.There is also no standard way to access this [[prototype]] property.
Apart from this hidden link [[prototype]], Whenever a function object is created,a prototype property is created within it, which is separate from hidden [[prototype]] property.
Now coming to your code :

var x = function func(){}

When this line execute , a function object x is created with two links :

Function.prototype (not accessible),
x.prototype (accessible).
x.prototype.log = function() { console.log("1"); }

as we know now that x is a function object so x.prototype is accessible, so here you are able to include log method with it.

var b = new x();

b is an object but not function object .It has that hidden link [[prototype]] but It is not accessible. so when you try to access like b.prototype it gives undefined as a result.If you want to check the prototype of b than you can see (x.prototype).isPrototypeOf(b); it will return true. so you can say that hidden link is referenced to x.prototype.

Here are some facts about prototype :

If object O is created with O = new func(){} then O[[prototype]] is Function.prototype.
If object O is created with O = {}then O[[prototype]] is Object.prototype.
If object O is created with O = Object.create(obj) then O[[prototype]] (read as "O's prototype") is obj.

*/
