var pets = ['cat', 'fish', 'dog', 'horse'];
var dogDetails = {
    name: "dog",
    color: "brown"
};

//while
var x = 0;
while(x<pets.length){
  console.log(pets[x]);
  x++;
}

//for
//The for loop has three clauses: the initialization clause,
//the conditional test clause, and the update clause.
for(var i = 0; i < pets.length; i++){
    console.log(pets[i]);
}

//for..in (Object)
for(const key in dogDetails){
    console.log(`${key}:${dogDetails[key]}`);
}
for(const val in pets){
  console.log(val); // prints index 0, 1, 2, 3
}

//for..of (Only on iterables | Array)
for(const value of pets){
    console.log(value);
}
// for(const value of dogDetails){ // Error: dogDetails is not iterable
//   console.log(value);
// }

//while
var i = 0;
while(i<4){
    console.log(pets[i++]);
}

//do..while
var i = 0;
do{
    console.log(pets[i++]);
}while(i < 4);
