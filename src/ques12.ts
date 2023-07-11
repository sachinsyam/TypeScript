import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortArrayDescending(array: number[]): number[] {
  return array.sort((a, b) => b - a);
}

function readArrayFromUser(_size: number): Promise<number[]> {
  return new Promise((resolve) => {
    rl.question(`Enter the values of the array (comma-separated): `, (input) => {
      const values = input.split(',').map((value) => parseInt(value.trim(), 10));
      resolve(values);
    });
  });
}

async function main() {
  console.log('Enter the size of an array:');
  const size: number = await new Promise((resolve) => {
    rl.question('Input: ', (input) => {
      const size = parseInt(input, 10);
      resolve(size);
    });
  });

  console.log('Enter the values of the array:');
  const array: number[] = await readArrayFromUser(size);

  const sortedArray = sortArrayDescending(array);

  console.log('Sorted array:');
  console.log(sortedArray.join(', '));

  rl.close();
}

main();
