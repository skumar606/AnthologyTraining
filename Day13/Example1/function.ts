function division(num1: number, num2: number) {
    return num1/num2;
}

function printResult(num: number) {
    console.log(num);
}

printResult(division(10, 2));

let combineValuesFunction: (n1:  number, n2: number) => number;
combineValuesFunction = division;

printResult(combineValuesFunction(64, 16));