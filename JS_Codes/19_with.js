/*
    `with` essentially creates a whole new lexical scope (again, at runtime)
    by treating an object reference as a scope and that object’s properties
    as scoped identifiers.
*/

let foo = (obj) => {
  with (obj) {
    name = "Jatil Yadav";
  }
};

let o1 = {
  fullName: "Jatil Yadav",
};

foo(o1);
console.log(o1.fullName); // Jatil Yadav
console.log(o1.name); // undefiend
console.log(name); // Jatil Yadav -> Scope Variable Leaked!!

/*
    Since the JS Engine is unable to find a reference for `name`
    in the object `o1`, it follows the general rule of lexical
    scope lookup and declares the variable name in the global
    scope, thus exposing it to the scope outside of the function,
    `foo`. (Inshort, leaking it!)
*/

// Not exaclty leaking? -> V.IMP.
function person() {
  age = 24;
}
person();
console.log(age); // 24 !!
