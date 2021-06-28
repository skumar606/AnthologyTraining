"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var myValidator = new ZipCodeValidator_1["default"]();
console.log(myValidator.isAcceptable('353435'));
console.log(myValidator.isAcceptable('3534d'));
console.log(myValidator.isAcceptable('35347'));
