import readline from 'readline';

// Create a readline interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
/*
Notes

async Function: When you declare a function with the async keyword, it automatically returns a promise. This means that you can use the await keyword inside the function to pause its execution until a promise is resolved or rejected.

1. `await new Promise((resolve) => { ... })`: The `await` keyword is used to pause the execution of the surrounding `async` function until the promise is resolved. In this case, we create a new promise and pass an anonymous function as an argument to the promise constructor.

2. `(resolve) => { ... }`: This anonymous function is the callback function for the promise. It takes the `resolve` parameter, which is a function provided by the JavaScript runtime to fulfill the promise.

3. The body of the anonymous function within the curly braces `{ ... }` represents the asynchronous operation you want to perform. In the specific code you provided, it includes the code for prompting the user for input using `rl.question`.

4. Inside the callback function, when the asynchronous operation is complete and you have the necessary result (in this case, the user's input), you can call the `resolve` function with the desired value. This resolves the promise with the provided value and allows the `await` expression to proceed with the resolved value.

To summarize, the callback function `(resolve) => { ... }` is directly passed as an anonymous function to the promise constructor. It represents the code to execute when the promise is created and is responsible for resolving the promise with the desired value.


*/




  async function main() {
    console.log('Enter the size of arrays:');
    const size = await new Promise((resolve) => {
      rl.question('Input: ', (input) => {
        const size = parseInt(input, 10);
        resolve(size);
      });
    });
  

  }

  main().catch((error) => console.error(error));