import readline from 'readline';

function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (input: string) => {
  const number: number = parseInt(input, 10);

  if (isPrime(number)) {
    console.log('Entered number is a prime number');
  } else {
    console.log('Entered number is not a prime number');
  }

  rl.close();
});
