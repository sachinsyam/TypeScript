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
function countEvenNumbers(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
function readArrayFromUser(_size) {
    return new Promise((resolve) => {
        rl.question(`Enter the values of the array (comma-separated): `, (input) => {
            const values = input.split(',').map((value) => parseInt(value.trim(), 10));
            resolve(values);
        });
    });
}
async function main11() {
    console.log('Enter the size of an array:');
    const size = await new Promise((resolve) => {
        rl.question('Input: ', (input) => {
            const size = parseInt(input, 10);
            resolve(size);
        });
    });
    console.log('Enter the values of the array:');
    const array = await readArrayFromUser(size);
    const count = countEvenNumbers(array);
    console.log(`Number of even numbers in the given array is ${count}`);
    rl.close();
}
main11();
//# sourceMappingURL=ques11.js.map