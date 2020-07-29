/*
A closure is the local variables for a function - kept alive after the
function has exited.
In other words, a closure in JavScript is like keeping a copy of all the local variables,
just as they were when a function exited.
*/

//Example 1
function closureExample(nameArg){
    let name = nameArg;
    var getName = () => {
        console.log(name);
    }
    return getName;
}

let getName = closureExample("Bellamy");

getName(); // Bellamy


//Example 1.1 (Follow up)
function closureExample1(nameArg){
  let name = nameArg;
}
// console.log(name); // Name is not defined. Obvio..duh?


//Example 2
// In a closure JS Variables are kept by reference

function fun(){
    let num = 1;
    var getNum = () => {
        num += 2;
        console.log(num);
    }
    num++;
    return getNum;
}

let getNum = fun();
getNum(); //4
