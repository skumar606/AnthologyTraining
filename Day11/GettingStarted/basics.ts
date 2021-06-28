//console.log("Your code goes in here...!!!");

// function add(n1: number, n2: number) {
//     // if (typeof n1 !== 'number' || typeof n2 != 'number') {
//     //     throw new Error('Incorrect Input!');
//     // }
//     return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);

let number1 = 5;
//type inference
//number1 = '6';
const number2 = 2.8;
const printResult = true;
const phraseResult = "The result is: "

add(number1, number2, printResult, phraseResult);
function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    if (showResult) {
        const total = n1 + n2;
        console.log(phrase + total);
    }
    else {
        return n1 + n2;
    }

}