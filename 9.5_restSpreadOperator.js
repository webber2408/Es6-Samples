const values = {
    age_john: 49,
    age_kevin: 50,
    age_dawson: 51,
    age_harry: 52
}

const {age_john, ...n, age_harry} = values;

console.log(age_john);
console.log(n); // Print rest
console.log(age_harry); //SyntaxError: Rest element must be last element