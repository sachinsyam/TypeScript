function printPattern2(rows: number): void {
    let count = 1;
  
    for (let i = 1; i <= rows; i++) {
      let row = '';
  
      for (let j = 1; j <= i; j++) {
        row += `${count}\t`;
        count++;
      }
  
      console.log(row);
    }
  }
  
  
  const numRows = 4;
  printPattern2(numRows);
  