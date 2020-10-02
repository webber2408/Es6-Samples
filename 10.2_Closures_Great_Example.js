// Great Example

for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
}
// prints 6 for 5 times! -- Why?
// i values are not enclosed in a closure

// So we put it in an IIFE as we know that execute immediately
// and maintain their own scope.
for (var i=1; i<=5; i++) {
    (function(){
        setTimeout( function timer(){
            console.log( i );
        }, i*1000 );
    })();
}

// Still doesn't work?
// Coz, what's the use of using an enclosing scope if it's
// not enclosing anything??

// So, time for some magic?
for (var i=1; i<=5; i++) {
    (function(){
        var j = i;
        setTimeout( function timer(){
            console.log( j );
        }, j*1000 );
    })();
}
// This works flawlessly

// or you could do,

for (var i=1; i<=5; i++) {
    (function(j){
        setTimeout( function timer(){
            console.log( j );
        }, j*1000 );
    })(i);
}

// Method 2 to implement closure via block-scoping
for (var i=1; i<=5; i++) {
    let j = i; // yay, block-scope for closure!
    setTimeout( function timer(){
        console.log( j );
    }, j*1000 );
} // Works perfectly fine!


/*
There’s a special behavior
defined for let declarations used in the head of a for loop. This behavior says
that the variable will be declared not just once for the loop, but each iteration.
And, it will, helpfully, be initialized at each subsequent iteration
with the valuefrom the end of the previous iteration.
*/
for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i );
    }, i*1000 );
} //works perfectly fine
