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
function calculateGrade(writtenTest, labExams, assignments) {
    const weightedWrittenTest = (writtenTest * 70) / 100;
    const weightedLabExams = (labExams * 20) / 100;
    const weightedAssignments = (assignments * 10) / 100;
    const overallGrade = weightedWrittenTest + weightedLabExams + weightedAssignments;
    return overallGrade;
}
function main() {
    console.log('Enter the marks scored by the student:');
    rl.question('Written test = ', (writtenTestInput) => {
        const writtenTest = parseFloat(writtenTestInput);
        rl.question('Lab exams = ', (labExamsInput) => {
            const labExams = parseFloat(labExamsInput);
            rl.question('Assignments = ', (assignmentsInput) => {
                const assignments = parseFloat(assignmentsInput);
                const grade = calculateGrade(writtenTest, labExams, assignments);
                console.log(`Grade of the student is ${grade.toFixed(1)}`);
                rl.close();
            });
        });
    });
}
main();
//# sourceMappingURL=ques18.js.map