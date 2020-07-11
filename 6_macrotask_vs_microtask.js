/* Asynchronous Promises vs Timeouts */

console.log("Begin"); //Main thread (Regular Synchronous Call)
setTimeout(() => { console.log("Timeout 1"); }, 0); //Macrotask
setTimeout(() => { console.log("Timeout 2"); }, 0); //Macrotask
Promise.resolve().then((res) => console.log("Promise 1")); //Microtask
Promise.resolve().then((res) => console.log("Promise 2")); //Mictotask
console.log("End"); //Main thread

/*
Output:

Begin
End
Promise 1
Promise 2
Timeout 1
Timeout 2
*/

/*
Explanation:

    All the setTimeouts and Promises are pushed in the event loop.
    But, why does the promise execute first and timeout second?
    It's because Promise interrupts the event loop the moment it resolves, 
    wherein, setTimeout after the time completes, gets appended at the end in the event queue.

    Priority: Main Thread > Microtask Queue > Macrotask Queue (Important)

    Note: 
    1) Microtasks come solely from our code. 
    They are usually created by promises: an execution of .then/catch/finally handler becomes a microtask.

    2) JS has three "stacks":
        a) Standard stack for all synchronous calls (one function calls another, etc)
        b) Microtask queue (or job queue or microtask stack) for all async operations with higher priority 
           E.g.(process.nextTick, Promises, Object.observe, MutationObserver)
        c) Macrotask queue (or event queue, task queue, macrotask queue) 
           for all async operations with lower priority.
           E.g.(setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering)

    If you don't understand event loop and event queue yet, not to worry, I will be posting
    a detailed JS Concept on them soon.
*/

