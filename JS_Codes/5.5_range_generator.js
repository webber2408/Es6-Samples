/* Building a Range Generator */

// Method 1 (Using Loops)
let rangeOne = (start, stop, step) => {
  let arr = [];
  for(let i=start; i<=stop; i+=step){
    arr.push(i);
  }
  return arr;
};
console.log(rangeOne(0, 10, 1)); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(rangeOne(0, 10, 2)); //[ 0, 2, 4, 6, 8, 10 ]


// Method 2 (Using Array.from())
let rangeTwo = (start, stop, step) => {
  return Array.from({
    length: (stop-start) / step + 1 // Coz index starts from 0
  }, (value, index) => {
    return start + (index*step);
  });
}
console.log(rangeTwo(0, 10, 1)); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(rangeTwo(0, 10, 2)); //[ 0, 2, 4, 6, 8, 10 ]
/*
  Note: If you are new to Array.from(), checkout my last post!
        Link is in the comments below.
*/


//Method 3 (Using Generators)
function * rangeThree(start, stop, step){
  for(let i=start; i<=stop; i+=step){
    yield i;
  }
}

for(let i of rangeThree(0, 10, 1)){
  console.log(i);
}

console.log([...rangeThree(0, 10, 2)])
/*
0
1
2
3
4
5
6
7
8
9
10
[ 0, 2, 4, 6, 8, 10 ]
*/
