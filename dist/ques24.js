"use strict";
class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }
    square(side) {
        return side * side;
    }
    rectangle(length, width) {
        return length * width;
    }
    triangle(base, height) {
        return (base * height) / 2;
    }
}
class MyClass extends Area {
    main() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Enter your choice:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n', (choice) => {
            switch (parseInt(choice)) {
                case 1:
                    rl.question('Enter the radius: ', (radius) => {
                        const area = this.circle(parseFloat(radius));
                        console.log('Area of the circle is:', area.toFixed(2));
                        rl.close();
                    });
                    break;
                case 2:
                    rl.question('Enter the side length: ', (side) => {
                        const area = this.square(parseFloat(side));
                        console.log('Area of the square is:', area.toFixed(2));
                        rl.close();
                    });
                    break;
                case 3:
                    rl.question('Enter the length: ', (length) => {
                        rl.question('Enter the width: ', (width) => {
                            const area = this.rectangle(parseFloat(length), parseFloat(width));
                            console.log('Area of the rectangle is:', area.toFixed(2));
                            rl.close();
                        });
                    });
                    break;
                case 4:
                    rl.question('Enter the base: ', (base) => {
                        rl.question('Enter the height: ', (height) => {
                            const area = this.triangle(parseFloat(base), parseFloat(height));
                            console.log('Area of the triangle is:', area.toFixed(2));
                            rl.close();
                        });
                    });
                    break;
                default:
                    console.log('Invalid choice!');
                    rl.close();
                    break;
            }
        });
    }
}
const myObject = new MyClass();
myObject.main();
//# sourceMappingURL=ques24.js.map