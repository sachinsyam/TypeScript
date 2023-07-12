"use strict";
class Car {
    name;
    mileage;
    max_speed;
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}
const obj = new Car("Tesla", 5000, 200);
console.log("Car name:", obj.name);
console.log("Mileage:", obj.mileage);
console.log("Max speed:", obj.max_speed);
//# sourceMappingURL=ques28.js.map