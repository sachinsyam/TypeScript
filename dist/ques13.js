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
function isPalindrome(str) {
    const processedStr = str.toLowerCase();
    const reversedStr = processedStr.split('').reverse().join('');
    return processedStr === reversedStr;
}
function readStringFromUser() {
    return new Promise((resolve) => {
        rl.question(`Enter a string: `, (input) => {
            resolve(input);
        });
    });
}
async function main() {
    const str = await readStringFromUser();
    const isPalindromeResult = isPalindrome(str);
    if (isPalindromeResult) {
        console.log('Entered string is a palindrome');
    }
    else {
        console.log('Entered string is not a palindrome');
    }
    rl.close();
}
main();
//# sourceMappingURL=ques13.js.map