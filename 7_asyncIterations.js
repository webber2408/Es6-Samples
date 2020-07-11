let numArray = [5, 2];
let arrayOfPromise = [];

//Building array of promise
numArray.forEach((item) => {
    arrayOfPromise = [...arrayOfPromise, new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Called after "+item+" seconds");
        }, item*1000);
    })]
});

(async () => {
    for (element of arrayOfPromise){
        element.then((res)=>{
            console.log(res);
        });
    }
})();
/*
Called after 2 seconds
Called after 5 seconds
*/

//Waiting for each Promise using async / await
//Important: Notice the use of await within the for loop
(async () => {
    for await (element of arrayOfPromise){
        console.log(element)
    }
})();
/*
Called after 5 seconds
Called after 2 seconds
*/

