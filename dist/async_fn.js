/*
    async and await are language features introduced in JavaScript to simplify asynchronous programming and make it more readable and manageable. Here's an explanation of async and await:

    async Function: When a function is declared with the async keyword, it becomes an asynchronous function. An asynchronous function always returns a promise, allowing you to work with promises in a more synchronous-like manner. 
    You can use the await keyword inside an async function to pause its execution until a promise is resolved.

    await Expression: The await keyword can only be used inside an async function. 
    It is used to pause the execution of the function until a promise is resolved. 
    When the await keyword is encountered, it expects a promise to be returned. The await expression then waits for the promise to resolve and unwraps the resolved value. 
    This allows you to write asynchronous code in a more sequential and readable way, similar to synchronous code.
*/

function fetchData(){
    return new Promise((resolve)=>{
    console.log('processing');
        setTimeout(()=>{
            resolve([1,2,3,4,5]);
        },2000);
    });
}

async function printData(){
    const data = await fetchData();
    console.log(data);
}

async function main(){
    console.log('main started');
    await printData();
    console.log('finished main');
}

main();