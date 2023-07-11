"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function readArrayFromUser(size) {
    return new Promise((resolve) => {
        rl.question(`Enter ${size} values for the array (comma-separated): `, (input) => {
            const values = input.split(',').map((value) => parseInt(value.trim(), 10));
            if (values.length !== size) {
                console.log(`Expected ${size} values, but ${values.length} values were entered.`);
                rl.close();
                return;
            }
            resolve(values);
        });
    });
}
function swapArrays(array1, array2) {
    const tempArray = [...array1];
    for (let i = 0; i < array2.length; i++) {
        array1[i] = array2[i];
        array2[i] = tempArray[i];
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Enter size');
        const size = yield new Promise((resolve) => {
            rl.question('Size:', (input) => {
                const size = parseInt(input, 10);
                resolve(size);
            });
        });
        console.log('Enter array 1:');
        const array1 = yield readArrayFromUser(size);
        console.log('Enter array 2:');
        const array2 = yield readArrayFromUser(size);
        console.log('Arrays before swapping:');
        console.log('Array 1:', array1);
        console.log('Array 2:', array2);
        swapArrays(array1, array2);
        console.log('After swapping');
        console.log('Array 1:', array1);
        console.log('Array 2:', array2);
        rl.close();
    });
}
main();
//# sourceMappingURL=ques10.js.map