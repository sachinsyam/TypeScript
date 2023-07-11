import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addArrays(array1: number[][], array2: number[][]): number[][] {
  const size = array1.length;
  const result: number[][] = [];

  for (let i = 0; i < size; i++) {
    const row: number[] = [];

    for (let j = 0; j < size; j++) {
      const sum = array1[i][j] + array2[i][j];
      row.push(sum);
    }

    result.push(row);
  }

  return result;
}

function readArrayFromUser(size: number): Promise<number[][]> {
  return new Promise((resolve) => {
    const array: number[][] = [];

    console.log(`Enter the values of array (comma-separated):`);

    rl.question(`Input: `, (input) => {
      const values = input.split(',').map((value) => parseInt(value.trim(), 10));

      for (let i = 0; i < size; i++) {
        const row = values.slice(i * size, (i + 1) * size);
        array.push(row);
      }

      resolve(array);
    });
  });
}

async function main() {
  console.log('Enter the size of arrays:');
  const size: number = await new Promise((resolve) => {
    rl.question('Input: ', (input) => {
      const size = parseInt(input, 10);
      resolve(size);
    });
  });

  console.log('Enter the values of array 1:');
  const array1: number[][] = await readArrayFromUser(size);

  console.log('Enter the values of array 2:');
  const array2: number[][] = await readArrayFromUser(size);

  const sumArray = addArrays(array1, array2);

  console.log('Sum of 2 arrays is:');
  console.log('Resultant Matrix:');
  for (const row of sumArray) {
    console.log(row.join(' '));
  }

 

  rl.close();
}

main();
