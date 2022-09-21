// class Employee{
//     constructor(empName){
//         this.empName = empName;
//     }
//     getEmployeeName(){
//         console.log("Employee Name: "+this.empName);
//     }

// }
// const emp = new Employee("John");
// emp.getEmployeeName();
class Person {
  _name;
  get getName() {
    console.log("PERSON : " + this.empName);
  }
  set setNewName(newName) {
    this.name = newName;
  }
  // static greet(){
  //     console.log("EMPLOYEE NAME From Person: "+super.empName);
  // }
}
var person = new Person("John");
person.getName; //getter
person.setNewName = "Kevin"; //setter
person.getName;
//person.greet();
// Person.greet();
// person.empName = "Rahul";
person.getName;
