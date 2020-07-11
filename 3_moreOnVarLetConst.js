//More on var, let, const

//Example 1 (var)
(function(){
    name = "Jughead";
    console.log(name); 
    // Returns Jughead, as `var` can be initialized / defined before its declaration.
    var name;
})();


//Example 2 (var - Scope Chaining) (Important)
(function(){
    age = 24;
    console.log(age); // Returns 24 
})();
/*
Here, the JS engine tries to resolve age against the scope chain.
If it finds the variable in the scope chain then it performs the assignment,
if it doesn't then it creates a property 'age' on the global object.
*/


// Example 2 (let)
(function(){
    name = "FP Jones"; 
    //ReferenceError: Cannot access 'name' before initialization
    console.log(name); 
    //Error because `let` can't be initialized / defined before its declaration unlike `var`
    let name;
})();


//Example 3 (const)
const name = "John";
name = "Doe"; //TypeError: Assignment to constant variable.


