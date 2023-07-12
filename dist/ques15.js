"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
function getArray() {
    return new Promise((resolve) => {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter the values of the array (comma-separated): ', (input) => {
            const values = input.split(',').map((value) => parseInt(value.trim(), 10));
            rl.close();
            resolve(values);
        });
    });
}
function displayArray(array) {
    console.log('Array values:');
    console.log(array.join(', '));
}
async function main() {
    const array = await getArray();
    displayArray(array);
}
main();
//# sourceMappingURL=ques15.js.map