// This is an example of callback function
/*
A fn is passed in to another fn to be executed after sometime.
*/
function fetchData(x){
    console.log('fetching data, please wait..')
    setTimeout(()=>{
        const data = [1,2,3];
        x(data);
    },2000);
}

function printData(data){
    console.log(data);
}

fetchData(printData);
