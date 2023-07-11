import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getArray(size: number): Promise<number[][]> {
  return new Promise((resolve) => {
    const arr: number[][] = [];

    function readRowValues(rowIndex: number): void {
      rl.question(`Enter the values for row ${rowIndex + 1} (comma-separated): `, (input) => {
        const values = input.split(',').map((value) => parseInt(value.trim(), 10));
        arr.push(values);

        if (arr.length < size) {
          readRowValues(arr.length);
        } else {
          resolve(arr);
        }
      });
    }

    readRowValues(0);
  });
}

function addArray(arr1: number[][], arr2: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < arr1.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

function displayArray(arr: number[][]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join('\t'));
  }
}

async function main(): Promise<void> {
  console.log('Enter the size of array');
  const sizeInput = await new Promise((resolve) => {
    rl.question('Input: ', (input) => {
      resolve(parseInt(input, 10));
    });
  });
  const size = sizeInput as number;

  console.log('Enter the values of array 1');
  const arr1 = await getArray(size);

  console.log('Enter the values of array 2');
  const arr2 = await getArray(size);

  console.log('Sum of array 1 and array 2:');
  const sumArray = addArray(arr1, arr2);
  displayArray(sumArray);

  rl.close();
}


main();
