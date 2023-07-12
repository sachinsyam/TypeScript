"use strict";
async function hello() {
    return 'hello';
}
let num = 23;
let num1;
let num3;
let a;
a = 'success';
a = 'failed';
a = 0;
;
let b;
b = 1;
b = 3;
let s1 = [1, "stud", true];
let s2 = [1, "stud"];
const person1 = { name: "per1_name", id: 1, misc1: 3 };
const person2 = { name: "per2_name", id: 2, misc2: "sd" };
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(2, 3);
function printFn(a, b) {
    console.log(a, b);
}
printFn("hello");
printFn("hello ", "world");
const array1 = [1, 2, 3];
const array2 = [{ name: "per1_name", id: 1 }, { name: "per1_name", id: 1 }];
function identity(arg) {
    return arg;
}
let output1 = identity("hello");
let output2 = identity(3);
let output3 = identity("44d");
class NamedValue {
    name;
    _value;
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
let value2 = new NamedValue('string val');
value2.setValue('hello');
console.log(value2.toString());
function fetchDataFromServer(processData) {
    setTimeout(() => {
        const data = { name: 'sachin', id: 123, enabled: true };
        processData(data);
    }, 1500);
}
function processData(data) {
    console.log(data);
}
fetchDataFromServer(processData);
//# sourceMappingURL=tsFeatures.js.map