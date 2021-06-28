import validator from "./ZipCodeValidator";
let myValidator = new validator();

console.log(myValidator.isAcceptable('353435'))
console.log(myValidator.isAcceptable('3534d'))
console.log(myValidator.isAcceptable('35347'))