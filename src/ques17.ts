import readline from 'readline';

class Calculator {
  addition(a: number, b: number): number {
    return a + b;
  }

  subtraction(a: number, b: number): number {
    return a - b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  const calculator = new Calculator();

  console.log('Menu:');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');

  rl.question('Enter your choice: ', (choice: string) => {
    const operation = parseInt(choice, 10);

    rl.question('Enter first number: ', (num1: string) => {
      const number1 = parseFloat(num1);

      rl.question('Enter second number: ', (num2: string) => {
        const number2 = parseFloat(num2);

        let result: number;
        let operator: string;

        try {
          switch (operation) {
            case 1:
              result = calculator.addition(number1, number2);
              operator = '+';
              break;
            case 2:
              result = calculator.subtraction(number1, 
                number2);
              operator = '-';
              break;
            case 3:
              result = calculator.multiplication(number1, number2);
              operator = '*';
              break;
            case 4:
              result = calculator.division(number1, number2);
              operator = '/';
              break;
            default:
              console.log('Invalid choice');
              rl.close();
              return;
          }

          console.log(`Result: ${number1} ${operator} ${number2} = ${result}`);
        } catch (error) {
          if (error instanceof Error) {
            console.log('Error:', error.message);
          } else {
            console.log('An error occurred');
          }
        } finally {
          rl.close();
        }
      });
    });
  });
}

main();
