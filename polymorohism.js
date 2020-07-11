class A{
    invoke(){
        console.log("A is invoked");
    }
}
class B extends A{
    invoke(){
        console.log("B is invoked");
    }
}
new A().invoke();
new B().invoke();