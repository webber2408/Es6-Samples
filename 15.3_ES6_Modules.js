/*
Function-based modules - can actually modify
a module’s API during the runtime easily by using a change() function to change
the return objects associated function to another child function.

But, 

1) ES6 module APIs are static (the APIs don’t change at runtime).
2) ES6 modules do not have an “inline” format, they must be defined in separate
files (one per module).
3) The browsers/engines have a default “module loader”, which
synchronously loads a module file when it’s imported.

*/