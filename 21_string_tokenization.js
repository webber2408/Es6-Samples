var str = "I speak Goat Latin";

var toGoatLatin = function(str){
    var array = str.split(" ");
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    array.map((item, index, arr) =>{

        // Vowel based manipulation
        if(vowels.includes(item[0])) arr[index] += "ma";
        else arr[index] = arr[index].slice(1,) + arr[index].slice(0, 1) + "ma";

        //Index based manipulation
        for(let v=index+1; v>0; v--)
            arr[index] += "a";

    });

    return array.join(" ");
}

console.log(toGoatLatin(str));