function multiply(num1: number, num2: number, printResult: boolean, printMessage: string) {
    if(printResult) {
        console.log(printMessage + num1*num2);
    }
}
let num1 = 12;
let num2 = 4;
let printRes = true;
let printMessage = "Product of two number is: ";


// console.log(multiply(num1, str));
multiply(num1, num2, printRes, printMessage);