Array.prototype.flat = (arr) => {

    const result = [];

    arr.forEach((i) => {
        if (Array.isArray(i)) {
            result.push(...flat(i));
        } else {
            result.push(i);
        }
    })

    return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

console.log(nested.flat())