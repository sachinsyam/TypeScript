import readline from 'readline';

function getArray(): Promise<number[]> {
  return new Promise<number[]>((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter the values of the array (comma-separated): ', (input: string) => {
      const values: number[] = input.split(',').map((value: string) => parseInt(value.trim(), 10));
      rl.close();
      resolve(values);
    });
  });
}

function displayArray(array: number[]): void {
  console.log('Array values:');
  console.log(array.join(', '));
}

async function main(): Promise<void> {
  const array: number[] = await getArray();
  displayArray(array);
}

main();
