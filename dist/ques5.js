"use strict";
function findGrade(mark) {
    switch (true) {
        case (mark > 90):
            console.log('A');
            break;
        case (mark > 80 && mark < 89):
            console.log('B');
            break;
        case (mark > 70 && mark < 79):
            console.log('C');
            break;
        case (mark > 60 && mark < 69):
            console.log('D');
            break;
        case (mark > 50 && mark < 59):
            console.log('E');
            break;
        default:
            console.log('Failed');
    }
}
findGrade(25);
findGrade(55);
findGrade(67);
findGrade(75);
findGrade(85);
findGrade(99);
//# sourceMappingURL=ques5.js.map