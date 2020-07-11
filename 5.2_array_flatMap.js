let arr_string = ["it's Sunny in", "", "California"];

console.log(arr_string.map(x => x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]

console.log(arr_string.flatMap(x => x.split(" ")));
// ["it's","Sunny","in", "", "California"]