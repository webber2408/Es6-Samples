var users = ['John', 'Mike', 'Adam', 'Michael'];
var newUsers = [...users, 'Philips'];
//Spread Operator
console.log(newUsers);

var sum = (a, b = 14) => {
    return a+b;
}
console.log("SUM = "+sum(6, 10));
console.log("SUM = "+sum(6));