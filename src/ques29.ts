function myFilter(myArray: number[], callback: (sum: number) => boolean): number {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    console.log('Even:',callback(sum));

    return sum;
  }
  

  const myArray: number[] = [1, 2, 3, 4, 5];

  const callback = (sum: number) => {
     if(sum % 2 == 0)
      return true;

      return false;
  };
  
  const result = myFilter(myArray, callback);
  console.log('Sum:',result);
