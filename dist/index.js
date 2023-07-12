"use strict";
let user = [1, 'Sachin'];
;
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 2;
    return income / 2;
}
calculateTax(10_000);
let employee = { id: 1,
    name: 'Sachin',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
let textBox = {
    drag() {
    },
    resize() {
    },
};
let qty = 50;
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hello');
}
greet('sac');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
let log = null;
log?.(1);
//# sourceMappingURL=index.js.map