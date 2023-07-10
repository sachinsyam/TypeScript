//tuple
let user: [number, string] = [1,'Sachin'];

//enum
const enum Size{Small=1, Medium, Large};
let mySize: Size= Size.Small;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear:number = 2022) : number{
    if(taxYear<2022)
    return income*2;

    return income/2;
    
}

calculateTax(10_000);

//object

//type is a blueprint for an object
type Employee = {
    readonly id:number,
    name:string,
    retire:(date:Date) => void
    
}

//initilize an object
let employee :Employee = {id:1, 
        name:'Sachin',
        retire: (date:Date)=>{
            console.log(date);
        }
    
    };

//Union Types
function kgToLbs(weight: number | string):number{
 //Narrowing : cpnverting to a more specefic type
 if(typeof weight === 'number')
    return weight*2.2;
 else
    return parseInt(weight)*2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

//Intersection
type Draggable = {
    drag: () => void;
}

type Resizeable = {
    resize: ()=> void;
}

type UIWidget = Draggable & Resizeable;

let textBox:UIWidget = {
    drag() {
        
    },
    resize() {
        
    },
}

//Literal Types(exacat or specific value)
type Quantity = 50|100;
let qty : Quantity = 50;

//Nullable Types

function greet(name: string | null | undefined){
    if(name)
    console.log(name.toLocaleUpperCase());
    else
    console.log('Hello');
}

greet('sac');

//Optional Chaining
type Customer = {
    birthday: Date
}

function getCustomer(id:number):Customer | null | undefined {
    return id === 0? null : {birthday : new Date()};
}

let customer = getCustomer(1);
//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customers?.[0]
//Optional call
let log: any = null;
log?.(1);