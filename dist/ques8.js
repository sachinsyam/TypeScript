"use strict";
function findOddSum(num) {
    var sum = 0;
    while (num != 0) {
        if (num % 2 != 0) {
            sum += num;
        }
        num--;
    }
    return sum;
}
console.log(findOddSum(10));
//# sourceMappingURL=ques8.js.map