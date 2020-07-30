var arr = ["John", "Kevin", "Adam"];
var arr1 = ["John", "Kevin", "Adam"];
var name = "John,Kevin,Adam";

console.log(arr == name); //true
console.log(arr == name); //true
console.log(arr1 == name); //true
/* Important, arrays are by default coerced to strings by simply
   joining all the values with commas ( , ) in between.
   Hence ["a","b","c"] & "a,b,c" are equal!
*/

console.log(arr == arr1); //false
console.log(arr === arr1); //false
/* Here both arr and arr1 have a typeof "object" and are both
   kept by reference.
   The (==)/(===) operators just compare the references and not the underlying values.
   Here, the references of both of them are different although the values
   are same, hence false!
*/