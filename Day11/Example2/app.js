function multiply(num1, num2, printResult, printMessage) {
    if (printResult) {
        console.log(printMessage + num1 * num2);
    }
}
var num1 = 12;
var num2 = 4;
var printRes = true;
var printMessage = "Product of two number is: ";
// console.log(multiply(num1, str));
multiply(num1, num2, printRes, printMessage);
