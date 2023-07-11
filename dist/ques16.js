"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter a number: ', (input) => {
    const number = parseInt(input, 10);
    if (isPrime(number)) {
        console.log('Entered number is a prime number');
    }
    else {
        console.log('Entered number is not a prime number');
    }
    rl.close();
});
//# sourceMappingURL=ques16.js.map