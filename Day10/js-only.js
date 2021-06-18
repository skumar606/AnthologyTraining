const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.querySelector("#button1");

button.addEventListener("click", function () { console.log(add(num1.value, num2.value)) }, false)

function add(num1, num2) {
    return (+num1 + +num2);

}


//https://stackabuse.com/javascript-convert-string-to-number
// Converting String to Number
// As with the previous shown methods, JavaScript also provides functions to easily transform a String to a primitive number. 
//These are parseInt(), parseFloat(), Math.floor(), Math.ceil(), Unary Operator / Multiply by 1.

// .parseInt() takes a String as a first argument, and a base to which that String will be converted to. This method always returns an integer.
// .parseFloat() takes a String as an argument, and returns the Float point number equivalent.
// Math.floor() is used to round an integer or floating point number. It returns the nearest integer rounded down.
// Math.ceil() can be used to round an integer or floating point number.
// Unary Operator By adding a + sign before a String, it will be converted into a number if it follows the right format.
// Multiply by 1
// If a String is multiplied by the primitive number 1, the string will become a number.