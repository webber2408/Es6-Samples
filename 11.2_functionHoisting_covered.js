
// Function Hoisting

//Example 1
function foo(name){
    console.log(name);
}
foo("Archie");

bar("Veronica");
function bar(name){
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

definitionNotHoisted(); //TypeError: definitionNotHoisted is not a function

definitionHoisted();

function definitionHoisted(){
    console.log("Here, both function definition and declaration are hoisted");
}

//Function Expression
var definitionNotHoisted = () => {
    console.log("Here, only function declaration is hoisted.")
}

/*
Output (When we comment out line 27):

Here, both function definition and declaration are hoisted
*/
