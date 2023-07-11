"use strict";
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
printPattern(5);
//# sourceMappingURL=ques9.js.map