const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


  function readArrayFromUser(size: number): Promise<number[]> {
    return new Promise((resolve) => {
      rl.question(`Enter ${size} values for the array (comma-separated): `, (input:string) => {
        const values = input.split(',').map((value) => parseInt(value.trim(), 10));
  
        if (values.length !== size) {
          console.log(`Expected ${size} values, but ${values.length} values were entered.`);
          rl.close();
          return;
        }
  
        resolve(values);
      });
    });
  }

  function swapArrays(array1:number[], array2:number[]): void{
    const tempArray = [...array1] ;  
     
    //swap
    for(let i=0; i<array2.length; i++){
      array1[i] = array2[i];
      array2[i] = tempArray[i];
    }

  }

  
  async function main(){
    console.log('Enter size');
    const size:number = await new Promise((resolve)=>{
      rl.question('Size:', (input:string)=>{
        const size = parseInt(input, 10);
        resolve(size);
      });
    });

    console.log('Enter array 1:');
    const array1:number[] = await readArrayFromUser(size);
    console.log('Enter array 2:');
    const array2:number[] = await readArrayFromUser(size);

    console.log('Arrays before swapping:');
    console.log('Array 1:', array1);
    console.log('Array 2:', array2);

    swapArrays(array1,array2);
    console.log('After swapping');
    console.log('Array 1:', array1);
    console.log('Array 2:', array2);
    
    rl.close();

  }

  main();
