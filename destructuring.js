var userDetails = ["John", 24, "Doe", "MG Road, Gurgaon"];

var [name, age] = userDetails;
console.log(name);
console.log(age);
/*
John
24
*/

var [name,,,address] = userDetails;
console.log(name);
console.log(address);
/*
John
MG Road, Gurgaon
*/