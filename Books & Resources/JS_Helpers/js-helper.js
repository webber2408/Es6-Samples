require('./modules/remove-elements');


const arr1 = ["Hey", "there"];
const arr2 = [
    {
        age: 24,
        name: "Rahul"
    },
    {
        age: 25,
        name: "Kevin"
    }
];
const arr3 = [24, 25];
const arr4 = [true, false, true, false];
const arr5 = [null, null];
const foo = () => console.log("foo");
const bar = () => console.log("bar");
const arr6 = [foo, bar];

let ans = arr6.removeElements([foo]);
console.log(ans);

let ans1 = arr2.removeElements([{
    age: 24,
    name: "Rahul"
}], "age");
console.log(ans1);