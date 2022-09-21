/*
The prototype is an object that is associated with every functions and objects by default in JavaScript,
where function's prototype property is accessible and modifiable and object's prototype property
(aka attribute) is not visible. Every function includes prototype object by default.
*/


// Example 1
let foo = {
    name: "Kevin"
}
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
var o = {f: function() { return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
