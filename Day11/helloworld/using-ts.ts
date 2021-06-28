const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button1 = document.querySelector("#button1");


function add(num1: number, num2: number) {
    return (num1 + num2);

}

button1.addEventListener("click", function () { console.log(add(+input1.value, +input2.value)) }, false)
