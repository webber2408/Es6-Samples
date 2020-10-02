/*
The word “polyfill” is an invented term (by Remy Sharp) used to
refer to taking the definition of a newer feature and producing a
piece of code that’s equivalent to the behavior, but is able to run in
older JS environments.
*/

// Creating a pollyfill for Number.isNaN();
if(!Number.isNaN){
    Number.isNaN = function(x){
        return x !== x;
    }
}
// NaN is the only value in JS which is not equal to itself!

/*
    Transpiling = (Transforming + Compiling)
    e.g. Babel, Traceur
*/