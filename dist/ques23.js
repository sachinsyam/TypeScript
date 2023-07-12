"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
class TwoDArray {
    size;
    arr;
    constructor(size) {
        this.size = size;
        this.arr = [];
    }
    async getArray() {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        for (let i = 0; i < this.size; i++) {
            const row = [];
            const input = await new Promise((resolve) => {
                rl.question(`Enter the values for row ${i + 1} (comma-separated): `, (answer) => {
                    resolve(answer);
                });
            });
            row.push(...input.split(',').map((value) => parseInt(value.trim(), 10)));
            this.arr.push(row);
        }
        rl.close();
    }
    displayArray() {
        console.log('Array elements are:');
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i].join('\t'));
        }
    }
}
async function main() {
    const size = await readInput('Enter the size of array: ');
    const arrayObj = new TwoDArray(size);
    await arrayObj.getArray();
    arrayObj.displayArray();
}
function readInput(prompt) {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(parseInt(answer, 10));
            rl.close();
        });
    });
}
main();
//# sourceMappingURL=ques23.js.map