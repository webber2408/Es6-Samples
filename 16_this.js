/*
If a function has a this reference inside it, that this reference usu‐
ally points to an object . But which object it points to depends on
how the function was called.
It’s important to realize that this does not refer to the function itself,
as is the most common misconception.
*/

function fun(){
    console.log(this.name);
}

var name = "Rahul Sharma";
var obj1 = {
    name: "Kevin",
    fun: fun
};
var obj2 = {
    name: "John"
}


fun();
obj1.fun();
fun.call(obj2);
new fun(); // sets this to a brand new empty object.
/*
undefined
Kevin
John
undefined
*/