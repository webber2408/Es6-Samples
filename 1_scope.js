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


// Scope in for loop (How let scoping works!)
{  
  let j;
  for (j=0; j<10; j++) {
    let i = j; // re-bound for each iteration!
    console.log( i );
  }
}
