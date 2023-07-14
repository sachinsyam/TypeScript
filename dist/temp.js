"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get('https://www.boredapi.com/api/activity')
    .then((response) => {
    console.log(response.data);
})
    .catch((error) => {
    console.error(error);
});
const str = "apple,banana,cherry";
const fruits = str.split(",");
console.log(fruits);
//# sourceMappingURL=temp.js.map