"use strict";
function process1() {
    console.log('starting process');
    let data = 0;
    setTimeout(() => {
        console.log('process finished');
        data = 55;
    }, 1000);
    return data;
}
async function asyncFn() {
    console.log('started fn');
    process1();
    console.log('function finished');
}
asyncFn();
console.log(process1());
//# sourceMappingURL=temp.js.map