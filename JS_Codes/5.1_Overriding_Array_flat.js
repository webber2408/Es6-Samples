/* Overriding Array.flat() */

Array.prototype.flat = function(){
    const result = [];

    this.forEach((i) => {
        if (Array.isArray(i)) {
            result.push(...i.flat());
        } else {
            result.push(i);
        }
    })

    return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(nested.flat());
