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
function addArrays(array1, array2) {
    const size = array1.length;
    const result = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const sum = array1[i][j] + array2[i][j];
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
function readArrayFromUser(size) {
    return new Promise((resolve) => {
        const array = [];
        console.log(`Enter the values of array (comma-separated):`);
        rl.question(`Input: `, (input) => {
            const values = input.split(',').map((value) => parseInt(value.trim(), 10));
            for (let i = 0; i < size; i++) {
                const row = values.slice(i * size, (i + 1) * size);
                array.push(row);
            }
            resolve(array);
        });
    });
}
async function main() {
    console.log('Enter the size of arrays:');
    const size = await new Promise((resolve) => {
        rl.question('Input: ', (input) => {
            const size = parseInt(input, 10);
            resolve(size);
        });
    });
    console.log('Enter the values of array 1:');
    const array1 = await readArrayFromUser(size);
    console.log('Enter the values of array 2:');
    const array2 = await readArrayFromUser(size);
    const sumArray = addArrays(array1, array2);
    console.log('Sum of 2 arrays is:');
    console.log('Resultant Matrix:');
    for (const row of sumArray) {
        console.log(row.join(' '));
    }
    rl.close();
}
main();
//# sourceMappingURL=ques14.js.map