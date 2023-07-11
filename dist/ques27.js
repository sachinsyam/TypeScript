"use strict";
const my_height = 0;
try {
    if (isNaN(Number(my_height))) {
        throw new Error("notANumberError");
    }
    if (typeof my_height === "number") {
        if (my_height > 100) {
            throw new Error("hugeHeightError");
        }
        if (my_height < 1) {
            throw new Error("tinyHeightError");
        }
    }
    console.log(my_height);
}
catch (error) {
    console.log(error.message);
}
//# sourceMappingURL=ques27.js.map