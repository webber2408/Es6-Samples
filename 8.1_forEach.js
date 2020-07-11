var numbers = [20, 30, 40, 50];

//forEach
//(The forEach() method executes a provided callback function once for each array element.)
//There is no way to stop or break a forEach() loop other than by throwing an exception.

//Example 1 (For each element in numbers array multiply them by 2 inplace)
numbers.forEach((item, index, arr) => {
    arr[index] = item*10;
});
numbers.forEach((item) => {
    console.log(item);
});
/*
Output:
200
300
400
500
*/

//Example 2 (forEach does not wait for promises, it expects a synchronous function)
let scores = [50, 40];
let totalScore = 0;

let calculateTotal = async (a, b) => {
    return a + b;
};

scores.forEach(async (item) => {
    totalScore = await calculateTotal(totalScore, item);
});

console.log(totalScore); // Returns 0 because forEach doesn't wait for promises.

/*
Output:
0
*/