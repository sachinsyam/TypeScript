"use strict";
var my_string = '123';
try {
    var reversed_string = my_string.split("").reverse().join("");
    console.log("Reversed string is: " + reversed_string);
    console.log("Type of my_string is: " + typeof my_string);
}
catch (err) {
    console.log("Error: " + err.message);
    console.log("Type of my_string is: " + typeof my_string);
}
//# sourceMappingURL=ques26.js.map