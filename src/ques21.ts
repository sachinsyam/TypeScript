function multiplyAdjacentValues(arr: number[]): number[] {
    const result: number[] = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      const product = arr[i] * arr[i + 1];
      result.push(product);
    }
  
    return result;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const multipliedArray = multiplyAdjacentValues(arr);
  console.log(multipliedArray.join('\t'));
  