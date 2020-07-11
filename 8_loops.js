var pets = ['cat', 'fish', 'dog', 'horse'];
var dogDetails = {
    name: "dog",
    color: "brown"
};


//for
for(var i = 0; i < pets.length; i++){
    console.log(pets[i]);
}

//for..in
for(const key in dogDetails){
    console.log(`${key}:${dogDetails[key]}`);
}

//for..of
for(const value of pets){
    console.log(value);
}

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