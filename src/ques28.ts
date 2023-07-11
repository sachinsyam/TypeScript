class Car {
    name: string;
    mileage: number;
    max_speed: number;
  
    constructor(name: string, mileage: number, max_speed: number) {
      this.name = name;
      this.mileage = mileage;
      this.max_speed = max_speed;
    }
  }
  
  const obj = new Car("Tesla", 5000, 200);
  
  console.log("Car name:", obj.name);
  console.log("Mileage:", obj.mileage);
  console.log("Max speed:", obj.max_speed);
  