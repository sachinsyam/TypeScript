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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const array = yield getArray();
        displayArray(array);
    });
}
main();
//# sourceMappingURL=ques15.js.map