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
function calculateIncomeTax(annualIncome) {
    let taxAmount = 0;
    if (annualIncome > 250000 && annualIncome <= 500000) {
        taxAmount = (annualIncome - 250000) * 0.05;
    }
    else if (annualIncome > 500000 && annualIncome <= 1000000) {
        taxAmount = (annualIncome - 500000) * 0.2 + 25000;
    }
    else if (annualIncome > 1000000 && annualIncome <= 5000000) {
        taxAmount = (annualIncome - 1000000) * 0.3 + 75000;
    }
    return taxAmount;
}
function main() {
    console.log('Enter the annual income:');
    rl.question('Annual Income: ', (incomeInput) => {
        const annualIncome = parseFloat(incomeInput);
        const taxAmount = calculateIncomeTax(annualIncome);
        console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
        rl.close();
    });
}
main();
//# sourceMappingURL=ques19.js.map