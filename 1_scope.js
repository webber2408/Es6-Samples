function foo(){
  let firstName = "John";
  function bar(){
    let lastName = "Murphy";
    console.log(firstName + " " + lastName);
  }
  bar();
}
foo();
/*
  Lexical scope rules say that code in one scope can access variables of
  either that scope or any scope outside of it.
*/
