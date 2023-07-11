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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const str = yield readStringFromUser();
        const isPalindromeResult = isPalindrome(str);
        if (isPalindromeResult) {
            console.log('Entered string is a palindrome');
        }
        else {
            console.log('Entered string is not a palindrome');
        }
        rl.close();
    });
}
main();
//# sourceMappingURL=ques13.js.map