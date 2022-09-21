var oldObject = {
    name: 'John'
}
var newObject = {
    age: 40   
}
newObject = Object.assign({}, oldObject, newObject);
console.log(newObject);

const currencies = {
    USD: 'United States Dollar',
    INR: 'Indian Rupee',
    AUD: 'Australian Dollar',
    EUR: 'Euro',
    JPY: 'Japan Yen'
}
console.log(Object.values(currencies));
console.log(Object.entries(currencies));
