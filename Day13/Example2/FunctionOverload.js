// function printResult(a: number): void;
// function printResult(a: string): void;
// function printResult(a: any): any {
//     if(typeof a === 'number') {
//         console.log("Its a number!");
//     } else if(typeof a === 'string') {
//         console.log("Its a string!");
//     }
// }
// printResult(246);
// printResult("string");
// let converter = (num: number) => {
//     return 0.3048 * num;
// }
// console.log(converter(2.5));
// let addition = (a: number, b: number, c ? : number) => {
//     if(c) {
//         return a + b + c;
//     }
//     return a+b;
// }
// console.log(addition(3, 6, 9));
// console.log(addition(3, 6));
// function billCalculator(amount: number, gst = 0.18) {
//     return (amount + (amount*gst));
// }
// console.log(billCalculator(100));
// console.log(billCalculator(100, .15));
var checkLeapYear = function (year) {
    if (year % 100 === 0) {
        if (year % 400 === 0)
            return true;
        else
            return false;
    }
    else {
        if (year % 4 === 0)
            return true;
        else
            return false;
    }
};
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(2024));
console.log(checkLeapYear(2025));
