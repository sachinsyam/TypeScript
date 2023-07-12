"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function getArray(size) {
    return new Promise((resolve) => {
        const arr = [];
        function readRowValues(rowIndex) {
            rl.question(`Enter the values for row ${rowIndex + 1} (comma-separated): `, (input) => {
                const values = input.split(',').map((value) => parseInt(value.trim(), 10));
                arr.push(values);
                if (arr.length < size) {
                    readRowValues(arr.length);
                }
                else {
                    resolve(arr);
                }
            });
        }
        readRowValues(0);
    });
}
function addArray(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        const row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            const sum = arr1[i][j] + arr2[i][j];
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join('\t'));
    }
}
async function main() {
    console.log('Enter the size of array');
    const sizeInput = await new Promise((resolve) => {
        rl.question('Input: ', (input) => {
            resolve(parseInt(input, 10));
        });
    });
    const size = sizeInput;
    console.log('Enter the values of array 1');
    const arr1 = await getArray(size);
    console.log('Enter the values of array 2');
    const arr2 = await getArray(size);
    console.log('Sum of array 1 and array 2:');
    const sumArray = addArray(arr1, arr2);
    displayArray(sumArray);
    rl.close();
}
main();
//# sourceMappingURL=ques22.js.map