import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateIncomeTax(annualIncome: number): number {
  let taxAmount = 0;

  if (annualIncome > 250000 && annualIncome <= 500000) {
    taxAmount = (annualIncome - 250000) * 0.05;
  } else if (annualIncome > 500000 && annualIncome <= 1000000) {
    taxAmount = (annualIncome - 500000) * 0.2 + 25000;
  } else if (annualIncome > 1000000 && annualIncome <= 5000000) {
    taxAmount = (annualIncome - 1000000) * 0.3 + 75000;
  }

  return taxAmount;
}

function main() {
  console.log('Enter the annual income:');
  rl.question('Annual Income: ', (incomeInput: string) => {
    const annualIncome = parseFloat(incomeInput);

    const taxAmount = calculateIncomeTax(annualIncome);
    console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);

    rl.close();
  });
}

main();
