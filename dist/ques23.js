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
class TwoDArray {
    constructor(size) {
        this.size = size;
        this.arr = [];
    }
    getArray() {
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            for (let i = 0; i < this.size; i++) {
                const row = [];
                const input = yield new Promise((resolve) => {
                    rl.question(`Enter the values for row ${i + 1} (comma-separated): `, (answer) => {
                        resolve(answer);
                    });
                });
                row.push(...input.split(',').map((value) => parseInt(value.trim(), 10)));
                this.arr.push(row);
            }
            rl.close();
        });
    }
    displayArray() {
        console.log('Array elements are:');
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i].join('\t'));
        }
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const size = yield readInput('Enter the size of array: ');
        const arrayObj = new TwoDArray(size);
        yield arrayObj.getArray();
        arrayObj.displayArray();
    });
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