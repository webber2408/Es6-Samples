var phdMixin = require('./mixinModule');
class Employee{
    constructor(empName){
        this.empName = empName;
    }
    sayIntro(){
        console.log(this.empName+" is an employee!");
    }
}


class Person extends phdMixin(Employee){
    constructor(name){
        super(name);
        this.name = name;
    }
    sayName(){
        console.log("My name is "+this.name);
    }
}
var p1 = new Person("Ram");
p1.sayName();
p1.sayIntro();
p1.sayStudentName();