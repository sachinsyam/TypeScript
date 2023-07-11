import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countEvenNumbers(array: number[]): number {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

function readArrayFromUser(
    _size: number): Promise<number[]> {
  return new Promise((resolve) => {
    rl.question(`Enter the values of the array (comma-separated): `, (input) => {
      const values = input.split(',').map((value) => parseInt(value.trim(), 10));
      resolve(values);
    });
  });
}

async function main11() {
  console.log('Enter the size of an array:');
  const size: number = await new Promise((resolve) => {
    rl.question('Input: ', (input) => {
      const size = parseInt(input, 10);
      resolve(size);
    });
  });

  console.log('Enter the values of the array:');
  const array: number[] = await readArrayFromUser(size);

  const count = countEvenNumbers(array);

  console.log(`Number of even numbers in the given array is ${count}`);

  rl.close();
}

main11();
