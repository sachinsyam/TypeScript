"use strict";
function myFilter(myArray, callback) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    console.log('Even:', callback(sum));
    return sum;
}
const myArray = [1, 2, 3, 4, 5];
const callback = (sum) => {
    if (sum % 2 == 0)
        return true;
    return false;
};
const result = myFilter(myArray, callback);
console.log('Sum:', result);
//# sourceMappingURL=ques29.js.map