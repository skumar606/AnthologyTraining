function division(num1, num2) {
    return num1 / num2;
}
function printResult(num) {
    console.log(num);
}
printResult(division(10, 2));
var combineValuesFunction;
combineValuesFunction = division;
printResult(combineValuesFunction(64, 16));
