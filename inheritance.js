class phdStudent{
    constructor(studentName){
        this.studentName = studentName;
    }
    sayStudentName(){
        console.log(this.studentName + "is a PHD Student");
    }
}
class Employee {
    constructor(empName){
        this.empName = empName;
    }
    sayIntro(){
        console.log(this.empName+" is an employee!");
    }
}
class Person extends Employee{
    constructor(name){
        super(name);
        this.name = name;
    }
    sayName(){
        console.log("My name is "+this.name);
    }
}

var p1 = new Person("Ram");
var p2 = new Person("Mohan");
console.log(p1.name);
p2.sayName();
p1.sayName();
p1.sayIntro();
