//Example 1
var greet = (message) => {
    console.log("Hello, "+message);
}
greet("it's nice meeting you!");
//Hello, it's nice meeting you!

//Example 2
function myFunc(name){
    this.name = name;
    this.getName = () => {
        console.log("My name is "+this.name);
    }
    this.age = 24;
}
var obj = new myFunc("John");
obj.getName(); //My name is John
var separateGetName = obj.getName;
separateGetName(); //My name is John
myFunc.title = "Hello World!";
console.log(myFunc.title); //Hello World!

console.log(myFunc); //[Function: myFunc] { title: 'Hello World!' }
console.log(typeof(myFunc)); //function => "function" is a subtype of "object"
console.log(typeof(obj.getName()));
// My name is John
//undefined
console.log(typeof(obj.age)); //number


//Example 3 (Anonymous Function - More Common)
var foo = function(){
    console.log("Hello!");
}

//Example 4 (Named Function)
var x = function bar(){
    console.log("Hey!");
}
// bar(); //bar is not defiend