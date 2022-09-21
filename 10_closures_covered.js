/*
A closure is the local variables for a function - kept alive after the
function has exited.
In other words, a closure in JavScript is like keeping a copy of all the local variables,
just as they were when a function exited.
*/

//Example 1
function closureExample(nameArg) {
  let name = nameArg;
  var getName = () => {
    console.log(name);
  };
  return getName;
}
let getName = closureExample("Bellamy");
getName(); // Bellamy
// In this case, getName() has a lexical scope closure over the inner scope
// of closureExample() function, which keeps the scope alive for getName() to reference at
// any later time & hence the scope variables are not collected by the garbage collector
// even if the function has exited!
// getName() still has a reference to the inner scope of the closureExample() function
// and that reference is called a closure.
// Also, to note, here getName() is being executed outside of its declared lexical scope.

//Example 2
// In a closure JS Variables are kept by reference
function fun() {
  let num = 1;
  var getNum = () => {
    num += 2;
    console.log(num);
  };
  num++;
  return getNum;
}

let getNum = fun();
getNum(); //4

// Example
function wait(message) {
  setTimeout(function timer() {
    console.log(message); // logs Hello, closure!
  }, 1000);
}
wait("Hello, closure!");

/*
Be that timers, event handlers, Ajax requests, cross-window messaging, web workers,
or any of the other asynchronous (or synchronous!) tasks, everything has a closure.
*/
