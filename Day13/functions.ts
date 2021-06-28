function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {

    console.log(num);

}

//call passing function as as argument
printResult(add(5, 12));

//Using any
let combineValuesAny;
combineValuesAny = add;
//Downside you can have anything assigned as it is of type any 
//combineValuesAny = 5;
console.log(combineValuesAny(5, 4));

//Using Function
let combineValuesFunction: Function;
combineValuesFunction = add;
//would be nice if typescript could tell us about that 
//combineValuesFunction = printResult;
console.log(combineValuesFunction(2, 3));

//Using Arrow Functions
let combineValuesArrFunction: (a: number, b: number) => number;

combineValuesArrFunction = add;

//Does not allow the assignment given below
//combineValuesArrFunction = printResult;

console.log(combineValuesArrFunction(9, 7));
