var age = 29;
var name = "John";
var address = "MG Road, Gurgaon";
var hobby = ['Playing football', 'Photography'];

var user = {
    age,
    name,
    address,
    hobby
}

console.log(user);


var key = "name";
var details = {
    ["first_" + key]: "John",
    ["last_" + key]: "Doe"
}
console.log(details);