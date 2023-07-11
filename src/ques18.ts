import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
  const weightedWrittenTest = (writtenTest * 70) / 100;
  const weightedLabExams = (labExams * 20) / 100;
  const weightedAssignments = (assignments * 10) / 100;

  const overallGrade = weightedWrittenTest + weightedLabExams + weightedAssignments;
  return overallGrade;
}

function main() {
  console.log('Enter the marks scored by the student:');
  rl.question('Written test = ', (writtenTestInput: string) => {
    const writtenTest = parseFloat(writtenTestInput);

    rl.question('Lab exams = ', (labExamsInput: string) => {
      const labExams = parseFloat(labExamsInput);

      rl.question('Assignments = ', (assignmentsInput: string) => {
        const assignments = parseFloat(assignmentsInput);

        const grade = calculateGrade(writtenTest, labExams, assignments);
        console.log(`Grade of the student is ${grade.toFixed(1)}`);

        rl.close();
      });
    });
  });
}

main();
