// Function Hoisting

//Example 1
function foo(name) {
  console.log(name);
}
foo("Archie");

bar("Veronica");
function bar(name) {
  console.log(name);
}
/* One of the advantages of JavaScript putting function declarations into memory
before it executes any code segment is that it allows you to use a function
before you declare it in your code.

Output:

Archie
Veronica
*/

//Example 2
// definitionNotHoisted(); //TypeError: definitionNotHoisted is not a function

definitionHoisted();

function definitionHoisted() {
  console.log("Here, both function definition and declaration are hoisted");
}

//Function Expression
var definitionNotHoisted = () => {
  console.log("Here, only function declaration is hoisted.");
};

/*
Output (When we comment out line 24):

Here, both function definition and declaration are hoisted
*/

//Example
foo(); // TypeError
bar(); // ReferenceError
var foo = function bar() {
  // ...
};

// Above one is interpreted as (not real code)
var foo;
foo(); // TypeError
bar(); // ReferenceError
foo = function () {
  //var bar = ...self...
  // ...
};

//Example (Functions first!)
foo(); // 1
var foo;
function foo() {
  console.log(1);
}
foo = function () {
  console.log(2);
};

// the above code is interpreted by the engine as
function foo() {
  console.log(1);
}
foo(); // 1
foo = function () {
  console.log(2);
};

/*
Notice that var foo was the duplicate (and thus ignored) declaration, even
though it came before the function foo()... declaration, because function
declarations are hoisted before normal variables.
*/

// Example
foo(); // 3
function foo() {
  console.log(1);
}
var foo = function () {
  console.log(2);
};
function foo() {
  console.log(3);
}

/*
No matter where a function is invoked from, or even how it is invoked,
its lexical scope is only defined by where the function was declared.
*/
