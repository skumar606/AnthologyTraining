var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button1 = document.querySelector("#button1");
function add(num1, num2) {
    return (num1 + num2);
}
button1.addEventListener("click", function () { console.log(add(input1.value, input2.value)); }, false);
