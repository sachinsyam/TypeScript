"use strict";
function printPattern2(rows) {
    let count = 1;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += `${count}\t`;
            count++;
        }
        console.log(row);
    }
}
const numRows = 4;
printPattern2(numRows);
//# sourceMappingURL=ques20.js.map