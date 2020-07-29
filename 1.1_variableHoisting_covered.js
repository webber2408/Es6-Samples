// Variable Hoisting

//Example 1
console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // Declaration
num = 1; // Initialization

//Example 2
x = 2;
console.log(x); // Returns 2 as in JavaScript, a variable can be declared after it has been used.
var x;

//Example 3
console.log(y); // Throws ReferenceError exception because y hasn't been declared.
y = 6; // Initialization

//Example 4 (Important)
var flag = false;
(function(){
    console.log(flag);
    var flag = true; // JavaScript only hoists declarations, not initializations, hence the above log prints undefined
    console.log(flag);

    /*
        The above block becomes something like this:

        var flag; // Due to variable hoisting, and its value is `undefined` here.
        console.log(flag);
        flag = true;
        console.log(flag);
    */

    if(flag){
        // let & const are always block scoped (here, `if` block!)
        let name = "Betty";
        const age = "24";

        console.log(name);
        console.log(age);
    }

    //console.log(name); //ReferenceError: name is not defined ( as name is block scoped here )
    //console.log(age);  //ReferenceError: age is not defined ( as age is block scoped )

})();
/*
undefined
true
Betty
24
*/
