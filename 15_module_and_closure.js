/*
The most common usage of closure in JavaScript is the module pat‐
tern. Modules let you define private implementation details (vari‐
ables, functions) that are hidden from the outside world, as well as a
public API that is accessible from the outside.
*/

//1
function User(){
    var username, password;

    function login(uname, pass){
        username = uname;
        password = pass;
    }

    function getUserDetails(){
        console.log("Username: "+username);
        console.log("Password: "+password);
    }

    var publicAPI = {
        login,
        getUserDetails
    };

    return publicAPI;
}

var admin = User(); // didn't use new because wastage of resources
/*

Executing User() creates an instance of the User module—a whole
new scope is created, and thus a whole new copy of each of these
inner variables/functions.

Important:
----------
Also, here login() and getUserDetails() implement a closure over the private members of
the function User().

*/
admin.login("admin", "admin1234"); // Closure
admin.getUserDetails(); // Closure
/*
Username: admin
Password: admin1234
*/

//2
var sumCalculator = (a, b) => {
    return a+b;
}
module.exports = { 
    sumCalculator
}