var phdMixin = (superClass) => class extends superClass{
    constructor(studentName){
        super(studentName);
        this.studentName = studentName;
    }

    sayStudentName(){
        console.log(this.studentName + " is a PHD Student");
    }
}

module.exports = phdMixin;