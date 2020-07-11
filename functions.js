var greet = (message) => {
    console.log("Hello, "+message);
}
greet("it's nice meeting you!");

function myFunc(name){
    this.name = name;
    this.getName = () => {
        console.log("My name is "+this.name);
    }
}
var obj = new myFunc("John");
obj.getName();
var separateGetName = obj.getName;
separateGetName();