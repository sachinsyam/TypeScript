import readline from 'readline';

class TwoDArray {
  private size: number;
  private arr: number[][];

  constructor(size: number) {
    this.size = size;
    this.arr = [];
  }

  async getArray(): Promise<void> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < this.size; i++) {
      const row: number[] = [];
      const input = await new Promise<string>((resolve) => {
        rl.question(`Enter the values for row ${i + 1} (comma-separated): `, (answer) => {
          resolve(answer);
        });
      });
      row.push(...input.split(',').map((value) => parseInt(value.trim(), 10)));
      this.arr.push(row);
    }

    rl.close();
  }

  displayArray(): void {
    console.log('Array elements are:');
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i].join('\t'));
    }
  }
}

async function main(): Promise<void> {
  const size = await readInput('Enter the size of array: ');
  const arrayObj = new TwoDArray(size);
  await arrayObj.getArray();
  arrayObj.displayArray();
}

function readInput(prompt: string): Promise<number> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<number>((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(parseInt(answer, 10));
      rl.close();
    });
  });
}


main();
