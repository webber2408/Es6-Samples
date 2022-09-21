//1
var num = 24;
var num1 = "52";
console.log(num < num1); //true [Implicit coercion takes place]
/*
If one of both the values in (<) inequality is
not a string, then both the values are coerced to
numbers, and a typical number comparison occurs.
*/

//2
var num2 = "293";
var num3 = "52";
console.log(num2 > num3); //false
/*
If both the values in the (<) inquality
operator are `strings`, the comparison
is made lexicographically (aka alphabetically,
and "2" appears before "5"), hence false!
*/

//3
var num4 = "50";
var str = "hey!";
console.log(num4 < str) //false
/*
Here str gets implicitly coerced to a number which is
"NaN" and it is neither less nor greater than any other
value
*/
