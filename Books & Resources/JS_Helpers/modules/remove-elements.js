function removeElements(subArr, objectKey) {
    if(this.length < 1) return;
    if(!isSanitized(this, subArr)){
        throw "Some of the element(s) is not of the same type in called array or input subarray";
    }

    let result = [];
    if(typeof(subArr[0]) === "object"){
        result = removeObjectElements(this, subArr, objectKey);
    }else{
        for(let item of this){
            if(!subArr.includes(item)) result.push(item);
        }
    }
    return result;
};

/* Helper Functions */

function isSanitized(arr, subArray){
    if(typeof(arr[0]) !== typeof(subArray[0]))
        return false;
    // arr
    let toCheckTypeArr = typeof(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(typeof(arr[i]) !== toCheckTypeArr) return false;
    }
    // subArr
    let toCheckTypeSubArr = typeof(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(typeof(arr[i]) !== toCheckTypeSubArr) return false;
    }
    return toCheckTypeArr && toCheckTypeSubArr;
}

function removeObjectElements(arr, subArr, objectKey){
    let result = [];
    for(let item of arr){
        for(let item1 of subArr){
            if(item[objectKey] !== item1[objectKey]) result.push(item);
        }
    }
    return result;
}

Array.prototype.removeElements = removeElements;
// module.exports = removeElements;