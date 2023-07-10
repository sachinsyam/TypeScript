"use strict";
function simpleInterest(principle, time, rate) {
    console.log("Principal : " + principle);
    console.log("Time : " + time);
    console.log("Rate : " + rate);
    var amount = (principle * time * rate) / 100;
    console.log("Simple Interest : " + amount + "\n");
}
simpleInterest(2500, 2, 5.5);
simpleInterest(31170.4, 5, 4.4);
//# sourceMappingURL=ques3.js.map