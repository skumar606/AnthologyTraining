//console.log("Your code goes in here...!!!");
// function add(n1: number, n2: number) {
//     if (typeof n1 !== 'number' || typeof n2 != 'number') {
//         throw new Error('Incorrect Input!');
//     }
//     return n1 + n2;
// }
// const number1 = 5;
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
var number1 = 5;
//type inference
//number1 = '6';
var number2 = 2.8;
var printResult = true;
var phraseResult = "The result is: ";
add(number1, number2, printResult, phraseResult);
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        var total = n1 + n2;
        console.log(phrase + total);
    }
    else {
        return n1 + n2;
    }
}
