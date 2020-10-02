function * generatorFunction(){
    console.log("I am extecuted first!");
    yield 'Howdy';

    console.log("I am executed after pause");
    yield "Modi?";
}

//invoking the generator function
const generatorObject = generatorFunction();

//generator object is an iterator
console.log(generatorObject);
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

function * infiniteStream(){
    let i = 1;
    while(true){
        yield i;
        i = i + 1;
    }
}

var numbers = infiniteStream();

console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
