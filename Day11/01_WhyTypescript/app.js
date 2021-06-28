let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
function add(num1, num2) {
    return ((num1) + (num2));
}
document.querySelector("#button1").addEventListener("click", function (event) {
    let sum = add(input1.value, input2.value)
    console.log(sum);
});

