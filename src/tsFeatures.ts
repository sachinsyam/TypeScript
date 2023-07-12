//Features of Typescript.
async function hello(){
    return 'hello';
}

//strong typing
let num = 23; //type automatically inferred
let num1:number; //explicit
let num3:any; //any type is accepted

//Custom types

type status = 'success'|'failed'|0;

let a:status;
a = 'success';
a = 'failed';
a = 0;

//enum

const enum orderStatus{cancelled = 1, success, failed};
let b:orderStatus;
b = 1;
b = 3;

//Tuple

type student = [number, string, boolean?]; //? makes it optional
let s1:student = [1, "stud", true];
let s2:student = [1, "stud"];



//interface
interface Person{
    name:string,
    id:number,
    [key:string]:any //optional and any kv pair can be added.
}
const person1:Person = {name:"per1_name",id:1,misc1:3};
const person2:Person = {name:"per2_name",id:2,misc2:"sd"};

//functions
function pow(x:number,y:number):string{
    return Math.pow(x,y).toString();
}
pow(2,3);

function printFn(a:string, b?:string){
    console.log(a,b);
}
printFn("hello");
printFn("hello ","world")

//Arrays
const array1:number[]=[1,2,3];
const array2:Person[]=[{name:"per1_name",id:1},{name:"per1_name",id:1}]

//Generics
function identity<T>(arg:T):T{
     return arg;
}

let output1:string = identity<string>("hello");
let output2:number = identity<number>(3);

let output3:string = identity("44d");

//Generic Classes
class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {

    }
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10

  let value2 = new NamedValue<string>('string val');
  value2.setValue('hello');
  console.log(value2.toString());

  //Class
  // class Product{
  //   private id:number;
  //   private name:string;
  //   private price:number;
  //   private enabled:boolean;

  //   constructor(id:number, name:string, price:number, enabled:boolean){
  //     this.id = id;
  //     this.name = name;
  //     this.price = price;
  //     this.enabled = enabled;
  //   }

  //   getName():string{
  //     return this.name;
  //   }
  //   setName(name:string):void{
  //     this.name = name;
  //   }
  // }

  // const product1 = new Product(1,"phone",1000,true);

  // const p1:Product = product1;
  

//callback
interface Result{
  name:string
  id:number
  enabled:boolean
}



function fetchDataFromServer(processData:(data:Result)=>void){
  setTimeout(() => {
      const data:Result = {name:'sachin', id:123, enabled:true};
      processData(data);
  }, 1500);
}

function processData(data:Result){
  console.log(data);
}

fetchDataFromServer(processData);


