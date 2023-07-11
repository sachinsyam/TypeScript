function findOddSum(num:number):number{
    var sum:number = 0;
    while(num != 0){
        if(num % 2 != 0){
            sum+=num;
        }
        num--;
    }
    return sum;
}

console.log(findOddSum(10));