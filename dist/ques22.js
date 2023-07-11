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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Enter the size of array');
        const sizeInput = yield new Promise((resolve) => {
            rl.question('Input: ', (input) => {
                resolve(parseInt(input, 10));
            });
        });
        const size = sizeInput;
        console.log('Enter the values of array 1');
        const arr1 = yield getArray(size);
        console.log('Enter the values of array 2');
        const arr2 = yield getArray(size);
        console.log('Sum of array 1 and array 2:');
        const sumArray = addArray(arr1, arr2);
        displayArray(sumArray);
        rl.close();
    });
}
main();
//# sourceMappingURL=ques22.js.map