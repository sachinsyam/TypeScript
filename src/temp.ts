import axios from 'axios';

axios.get('https://www.boredapi.com/api/activity')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });


const str = "apple,banana,cherry";
const fruits = str.split(",");

console.log(fruits);