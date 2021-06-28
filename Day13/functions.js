function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
//call passing function as as argument
printResult(add(5, 12));
//Using any
var combineValuesAny;
combineValuesAny = add;
//Downside you can have anything assigned as it is of type any 
//combineValuesAny = 5;
console.log(combineValuesAny(5, 4));
//Using Function
var combineValuesFunction;
combineValuesFunction = add;
//would be nice if typescript could tell us about that 
//combineValuesFunction = printResult;
console.log(combineValuesFunction(2, 3));
//Using Arrow Functions
var combineValuesArrFunction;
combineValuesArrFunction = add;
//Does not allow the assignment given below
//combineValuesArrFunction = printResult;
console.log(combineValuesArrFunction(9, 7));
